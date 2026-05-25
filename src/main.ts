import { stickers, type Sticker } from "./stickers";

/**
 * TypeScript 학습 포인트:
 * - 문자열 리터럴 유니언 타입은 정해진 문자열만 허용합니다.
 * - 여기서는 필터 값이 정해진 값 중 하나만 되도록 막습니다.
 */
type FilterMode = "all" | "owned" | "missing" | "duplicate" | "damaged";

/**
 * 각 띠부씰에 표시할 수 있는 상태입니다.
 */
type StickerStatus = {
  owned: boolean;
  duplicate: boolean;
  damaged: boolean;
};

type StatusKey = keyof StickerStatus;

/**
 * `Record<number, StickerStatus>`는 숫자 키와 상태 객체를 가진 타입입니다.
 * 예: `{ 1: { owned: true, duplicate: false, damaged: true } }`
 */
type CollectionState = Record<number, StickerStatus>;

const STORAGE_KEY = "since-1996-pokemon-sticker-collection";

const appState: {
  statusByOrder: CollectionState;
  searchTerm: string;
  filterMode: FilterMode;
} = {
  statusByOrder: loadCollection(),
  searchTerm: "",
  filterMode: "all"
};

/**
 * `querySelector<T>()`의 `<T>`는 제네릭 문법입니다.
 * TS에게 "이 DOM은 HTMLInputElement야"라고 알려주면 `.value` 같은 속성을 안전하게 쓸 수 있습니다.
 */
const gridElement = requireElement<HTMLElement>("#collection-grid");
const searchInput = requireElement<HTMLInputElement>("#search-input");
const ownedCountElement = requireElement<HTMLElement>("#owned-count");
const duplicateCountElement = requireElement<HTMLElement>("#duplicate-count");
const damagedCountElement = requireElement<HTMLElement>("#damaged-count");
const progressBarElement = requireElement<HTMLElement>("#progress-bar");
const clearButton = requireElement<HTMLButtonElement>("#clear-button");
const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");

render();

searchInput.addEventListener("input", () => {
  appState.searchTerm = searchInput.value;
  render();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextFilter = button.dataset.filter;

    /**
     * dataset 값은 HTML에서 온 문자열이라 TS 입장에서는 그냥 string입니다.
     * 그래서 `isFilterMode` 함수로 우리가 허용한 값인지 검사한 뒤 상태에 저장합니다.
     */
    if (isFilterMode(nextFilter)) {
      appState.filterMode = nextFilter;
      render();
    }
  });
});

clearButton.addEventListener("click", () => {
  appState.statusByOrder = {};
  saveCollection(appState.statusByOrder);
  render();
});

gridElement.addEventListener("change", (event) => {
  const target = event.target;

  /**
   * 브라우저 이벤트의 target은 Element가 아닐 수도 있습니다.
   * `instanceof HTMLInputElement`로 확인해야 checkbox 전용 속성인 `.checked`를 안전하게 씁니다.
   */
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const orderText = target.dataset.order;
  const statusKey = target.dataset.status;

  if (!orderText || !isStatusKey(statusKey)) {
    return;
  }

  const stickerOrder = Number(orderText);
  const nextStatus = {
    ...getStickerStatus(stickerOrder),
    [statusKey]: target.checked
  };

  if (statusKey === "owned" && !target.checked) {
    nextStatus.duplicate = false;
    nextStatus.damaged = false;
  }

  if ((statusKey === "duplicate" || statusKey === "damaged") && target.checked) {
    nextStatus.owned = true;
  }

  setStickerStatus(stickerOrder, nextStatus);
  saveCollection(appState.statusByOrder);
  render();
});

function render(): void {
  renderStats();
  renderFilterButtons();
  renderGrid(getVisibleStickers());
}

function renderStats(): void {
  const ownedCount = stickers.filter((sticker) => isOwned(sticker.order)).length;
  const duplicateCount = stickers.filter((sticker) => getStickerStatus(sticker.order).duplicate).length;
  const damagedCount = stickers.filter((sticker) => getStickerStatus(sticker.order).damaged).length;
  const progressPercent = Math.round((ownedCount / stickers.length) * 100);

  ownedCountElement.textContent = String(ownedCount);
  duplicateCountElement.textContent = String(duplicateCount);
  damagedCountElement.textContent = String(damagedCount);
  progressBarElement.style.width = `${progressPercent}%`;
}

function renderFilterButtons(): void {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === appState.filterMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderGrid(visibleStickers: Sticker[]): void {
  /**
   * `map()`은 배열의 각 항목을 다른 값으로 바꾸는 메서드입니다.
   * 여기서는 Sticker 객체 배열을 HTML 문자열 배열로 바꾼 뒤 `join("")`으로 하나로 합칩니다.
   */
  gridElement.innerHTML = visibleStickers.map(createStickerCard).join("");
}

function createStickerCard(sticker: Sticker): string {
  const status = getStickerStatus(sticker.order);
  const ownedClass = status.owned ? " is-owned" : "";
  const duplicateClass = status.duplicate ? " has-duplicate" : "";
  const damagedClass = status.damaged ? " has-damage" : "";
  const ownedChecked = status.owned ? "checked" : "";
  const duplicateChecked = status.duplicate ? "checked" : "";
  const damagedChecked = status.damaged ? "checked" : "";
  const badges = createStatusBadges(status);

  return `
    <article class="sticker-card${ownedClass}${duplicateClass}${damagedClass}">
      <div class="sticker-card__image-wrap">
        <img
          class="sticker-card__image"
          src="${sticker.imageUrl}"
          alt="${sticker.name} 띠부씰 이미지"
          loading="lazy"
        />
      </div>

      <div class="sticker-card__body">
        <div>
          <span class="sticker-card__meta">#${padNumber(sticker.order)} · 도감 ${sticker.dexNo}</span>
          <h2>${sticker.name}</h2>
          ${badges}
        </div>

        <div class="status-toggles" aria-label="${sticker.name} 상태 표시">
          <label class="status-toggle status-toggle--owned">
            <span>보관</span>
            <input type="checkbox" data-order="${sticker.order}" data-status="owned" ${ownedChecked} />
          </label>
          <label class="status-toggle status-toggle--duplicate">
            <span>중복</span>
            <input type="checkbox" data-order="${sticker.order}" data-status="duplicate" ${duplicateChecked} />
          </label>
          <label class="status-toggle status-toggle--damaged">
            <span>하자</span>
            <input type="checkbox" data-order="${sticker.order}" data-status="damaged" ${damagedChecked} />
          </label>
        </div>
      </div>
    </article>
  `;
}

function createStatusBadges(status: StickerStatus): string {
  const badges = [
    status.owned ? { className: "status-badge--owned", label: "보관" } : undefined,
    status.duplicate ? { className: "status-badge--duplicate", label: "중복" } : undefined,
    status.damaged ? { className: "status-badge--damaged", label: "하자" } : undefined
  ].filter((badge): badge is { className: string; label: string } => badge !== undefined);

  if (badges.length === 0) {
    return "";
  }

  return `
    <div class="sticker-card__badges" aria-label="표시된 상태">
      ${badges.map((badge) => `<span class="${badge.className}">${badge.label}</span>`).join("")}
    </div>
  `;
}

function getVisibleStickers(): Sticker[] {
  const normalizedSearchTerm = appState.searchTerm.trim().toLowerCase();

  return stickers.filter((sticker) => {
    const status = getStickerStatus(sticker.order);
    const matchesSearch =
      sticker.name.toLowerCase().includes(normalizedSearchTerm) ||
      String(sticker.order).includes(normalizedSearchTerm) ||
      String(sticker.dexNo).includes(normalizedSearchTerm);
    const matchesFilter =
      appState.filterMode === "all" ||
      (appState.filterMode === "owned" && status.owned) ||
      (appState.filterMode === "missing" && !status.owned) ||
      (appState.filterMode === "duplicate" && status.duplicate) ||
      (appState.filterMode === "damaged" && status.damaged);

    /**
     * filter 콜백은 true를 반환한 항목만 새 배열에 남깁니다.
     * 검색 조건과 필터 조건을 모두 만족해야 화면에 보이게 했습니다.
     */
    return matchesSearch && matchesFilter;
  });
}

function isOwned(stickerOrder: number): boolean {
  return getStickerStatus(stickerOrder).owned;
}

function getStickerStatus(stickerOrder: number): StickerStatus {
  return appState.statusByOrder[stickerOrder] ?? createEmptyStatus();
}

function setStickerStatus(stickerOrder: number, nextStatus: StickerStatus): void {
  if (!nextStatus.owned) {
    delete appState.statusByOrder[stickerOrder];
    return;
  }

  appState.statusByOrder[stickerOrder] = nextStatus;
}

function createEmptyStatus(): StickerStatus {
  return {
    owned: false,
    duplicate: false,
    damaged: false
  };
}

function padNumber(value: number): string {
  return String(value).padStart(2, "0");
}

function isFilterMode(value: string | undefined): value is FilterMode {
  return (
    value === "all" ||
    value === "owned" ||
    value === "missing" ||
    value === "duplicate" ||
    value === "damaged"
  );
}

function isStatusKey(value: string | undefined): value is StatusKey {
  return value === "owned" || value === "duplicate" || value === "damaged";
}

function loadCollection(): CollectionState {
  const savedValue = window.localStorage.getItem(STORAGE_KEY);

  if (!savedValue) {
    return {};
  }

  try {
    /**
     * JSON.parse는 문자열을 객체로 되돌립니다.
     * localStorage에는 문자열만 저장할 수 있어서, 객체 저장 전후에 JSON 변환이 필요합니다.
     */
    const parsedValue: unknown = JSON.parse(savedValue);
    return parseCollectionState(parsedValue);
  } catch {
    return {};
  }
}

function saveCollection(nextState: CollectionState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

function parseCollectionState(value: unknown): CollectionState {
  if (!isRecord(value)) {
    return {};
  }

  const nextState: CollectionState = {};

  for (const [orderText, statusValue] of Object.entries(value)) {
    const stickerOrder = Number(orderText);

    if (!Number.isInteger(stickerOrder)) {
      continue;
    }

    if (typeof statusValue === "boolean") {
      if (statusValue) {
        nextState[stickerOrder] = {
          owned: true,
          duplicate: false,
          damaged: false
        };
      }
      continue;
    }

    if (!isRecord(statusValue)) {
      continue;
    }

    const nextStatus = {
      owned: statusValue.owned === true,
      duplicate: statusValue.duplicate === true,
      damaged: statusValue.damaged === true
    };

    if (nextStatus.duplicate || nextStatus.damaged) {
      nextStatus.owned = true;
    }

    if (nextStatus.owned) {
      nextState[stickerOrder] = nextStatus;
    }
  }

  return nextState;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requireElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (!element) {
    throw new Error(`필수 화면 요소를 찾지 못했습니다: ${selector}`);
  }

  return element;
}
