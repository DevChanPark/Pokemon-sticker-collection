import { stickers, type Sticker } from "./stickers";

/**
 * TypeScript 학습 포인트:
 * - 문자열 리터럴 유니언 타입은 정해진 문자열만 허용합니다.
 * - 여기서는 필터 값이 "all" | "owned" | "missing" 중 하나만 되도록 막습니다.
 */
type FilterMode = "all" | "owned" | "missing";

/**
 * `Record<number, boolean>`은 숫자 키와 boolean 값을 가진 객체 타입입니다.
 * 예: `{ 1: true, 2: false }`는 1번 씰은 보관, 2번 씰은 미보관이라는 뜻입니다.
 */
type CollectionState = Record<number, boolean>;

const STORAGE_KEY = "since-1996-pokemon-sticker-collection";

const appState: {
  ownedByOrder: CollectionState;
  searchTerm: string;
  filterMode: FilterMode;
} = {
  ownedByOrder: loadCollection(),
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
  appState.ownedByOrder = {};
  saveCollection(appState.ownedByOrder);
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
  if (!orderText) {
    return;
  }

  const stickerOrder = Number(orderText);
  appState.ownedByOrder[stickerOrder] = target.checked;
  saveCollection(appState.ownedByOrder);
  render();
});

function render(): void {
  renderStats();
  renderFilterButtons();
  renderGrid(getVisibleStickers());
}

function renderStats(): void {
  const ownedCount = stickers.filter((sticker) => isOwned(sticker.order)).length;
  const progressPercent = Math.round((ownedCount / stickers.length) * 100);

  ownedCountElement.textContent = String(ownedCount);
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
  const owned = isOwned(sticker.order);
  const ownedClass = owned ? " is-owned" : "";
  const checked = owned ? "checked" : "";

  return `
    <article class="sticker-card${ownedClass}">
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
        </div>

        <label class="owned-toggle">
          <input type="checkbox" data-order="${sticker.order}" ${checked} />
          <span>보관 여부</span>
        </label>
      </div>
    </article>
  `;
}

function getVisibleStickers(): Sticker[] {
  const normalizedSearchTerm = appState.searchTerm.trim().toLowerCase();

  return stickers.filter((sticker) => {
    const owned = isOwned(sticker.order);
    const matchesSearch =
      sticker.name.toLowerCase().includes(normalizedSearchTerm) ||
      String(sticker.order).includes(normalizedSearchTerm) ||
      String(sticker.dexNo).includes(normalizedSearchTerm);
    const matchesFilter =
      appState.filterMode === "all" ||
      (appState.filterMode === "owned" && owned) ||
      (appState.filterMode === "missing" && !owned);

    /**
     * filter 콜백은 true를 반환한 항목만 새 배열에 남깁니다.
     * 검색 조건과 필터 조건을 모두 만족해야 화면에 보이게 했습니다.
     */
    return matchesSearch && matchesFilter;
  });
}

function isOwned(stickerOrder: number): boolean {
  return appState.ownedByOrder[stickerOrder] === true;
}

function padNumber(value: number): string {
  return String(value).padStart(2, "0");
}

function isFilterMode(value: string | undefined): value is FilterMode {
  return value === "all" || value === "owned" || value === "missing";
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
    return JSON.parse(savedValue) as CollectionState;
  } catch {
    return {};
  }
}

function saveCollection(nextState: CollectionState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

function requireElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (!element) {
    throw new Error(`필수 화면 요소를 찾지 못했습니다: ${selector}`);
  }

  return element;
}
