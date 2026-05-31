import {
  DEFAULT_SERIES_ID,
  stickerSeries,
  type Sticker,
  type StickerSeries,
  type StickerSeriesVerification
} from "./stickers";

type FilterMode = "all" | "owned" | "missing" | "duplicate" | "damaged";

type StickerStatus = {
  owned: boolean;
  duplicateCount: number;
  damagedCount: number;
};

type CountStatusKey = "duplicateCount" | "damagedCount";
type CollectionState = Record<number, StickerStatus>;
type SeriesCollectionState = Record<string, CollectionState>;
type ViewMode = "home" | "collection";

const STORAGE_KEY = "pokemon-sticker-collection-by-series";
const LEGACY_STORAGE_KEY = "since-1996-pokemon-sticker-collection";
const SELECTED_SERIES_KEY = "pokemon-sticker-collection-selected-series";
const MAX_STATUS_COUNT = 99;

const appState: {
  collectionBySeries: SeriesCollectionState;
  selectedSeriesId: string;
  searchTerm: string;
  filterMode: FilterMode;
  viewMode: ViewMode;
} = {
  collectionBySeries: loadCollection(),
  selectedSeriesId: loadSelectedSeriesId(),
  searchTerm: "",
  filterMode: "all",
  viewMode: loadViewMode()
};

const homeViewElement = requireElement<HTMLElement>("#home-view");
const collectionViewElement = requireElement<HTMLElement>("#collection-view");
const gridElement = requireElement<HTMLElement>("#collection-grid");
const homeSeriesGridElement = requireElement<HTMLElement>("#home-series-grid");
const seriesGuideBodyElement = requireElement<HTMLElement>("#series-guide-body");
const searchInput = requireElement<HTMLInputElement>("#search-input");
const homeButton = requireElement<HTMLButtonElement>("#home-button");
const collectionTitleElement = requireElement<HTMLElement>("#collection-title");
const collectionNoteElement = requireElement<HTMLElement>("#collection-note");
const ownedCountElement = requireElement<HTMLElement>("#owned-count");
const seriesTotalCountElement = requireElement<HTMLElement>("#series-total-count");
const totalCountElement = requireElement<HTMLElement>("#total-count");
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

    if (isFilterMode(nextFilter)) {
      appState.filterMode = nextFilter;
      render();
    }
  });
});

homeSeriesGridElement.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  const button = target.closest("[data-series-id][data-open-series]");

  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  const nextSeriesId = button.dataset.seriesId;

  if (!nextSeriesId || !getSeriesById(nextSeriesId)) {
    return;
  }

  appState.selectedSeriesId = nextSeriesId;
  appState.searchTerm = "";
  appState.filterMode = "all";
  searchInput.value = "";
  window.localStorage.setItem(SELECTED_SERIES_KEY, nextSeriesId);
  setViewMode("collection");
  render();
});

homeButton.addEventListener("click", () => {
  setViewMode("home");
  render();
});

window.addEventListener("hashchange", () => {
  appState.viewMode = loadViewMode();
  render();
});

clearButton.addEventListener("click", () => {
  delete appState.collectionBySeries[appState.selectedSeriesId];
  saveCollection(appState.collectionBySeries);
  render();
});

gridElement.addEventListener("change", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const orderText = target.dataset.order;
  const statusKey = target.dataset.status;

  if (!orderText || statusKey !== "owned") {
    return;
  }

  const stickerOrder = Number(orderText);
  const nextStatus = {
    ...getStickerStatus(stickerOrder),
    owned: target.checked
  };

  if (!target.checked) {
    nextStatus.duplicateCount = 0;
    nextStatus.damagedCount = 0;
  }

  setStickerStatus(stickerOrder, nextStatus);
  saveCollection(appState.collectionBySeries);
  render();
});

gridElement.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  const button = target.closest("[data-count-status][data-step][data-order]");

  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  const orderText = button.dataset.order;
  const countStatusKey = button.dataset.countStatus;
  const step = Number(button.dataset.step);

  if (!orderText || !isCountStatusKey(countStatusKey) || !Number.isInteger(step)) {
    return;
  }

  const stickerOrder = Number(orderText);
  const currentStatus = getStickerStatus(stickerOrder);
  const nextStatus = {
    ...currentStatus,
    [countStatusKey]: clampStatusCount(currentStatus[countStatusKey] + step)
  };

  if (nextStatus.duplicateCount > 0 || nextStatus.damagedCount > 0) {
    nextStatus.owned = true;
  }

  setStickerStatus(stickerOrder, nextStatus);
  saveCollection(appState.collectionBySeries);
  render();
});

function render(): void {
  renderView();
  renderHomeSeriesGrid();
  renderSeriesGuide();
  renderCollectionHeader();
  renderStats();
  renderFilterButtons();
  renderGrid(getVisibleStickers());
}

function renderView(): void {
  const isHome = appState.viewMode === "home";

  homeViewElement.hidden = !isHome;
  collectionViewElement.hidden = isHome;
}

function renderHomeSeriesGrid(): void {
  homeSeriesGridElement.innerHTML = stickerSeries.map(createHomeSeriesCard).join("");
}

function createHomeSeriesCard(series: StickerSeries): string {
  const isActive = series.id === appState.selectedSeriesId;
  const status = getSeriesProgress(series);
  const dataReadyLabel = series.stickers.length > 0 ? "체크 가능" : "데이터 준비중";
  const activeClass = isActive ? " is-active" : "";
  const pendingClass = series.stickers.length === 0 ? " is-pending" : "";
  const totalOwnedLabel = series.stickers.length > 0 ? `${status.ownedCount} / ${series.total}` : `0 / ${series.total}`;

  return `
    <button
      type="button"
      class="home-series-card${activeClass}${pendingClass}"
      data-series-id="${series.id}"
      data-open-series="true"
      aria-label="${series.title} 체크리스트 열기"
    >
      <span class="home-series-card__name">${series.title}</span>
      <span class="home-series-card__meta">${series.total}종 · ${dataReadyLabel}</span>
      <span class="home-series-card__progress">${totalOwnedLabel}</span>
      <span class="home-series-card__note">${series.note}</span>
    </button>
  `;
}

function renderSeriesGuide(): void {
  seriesGuideBodyElement.innerHTML = stickerSeries
    .map(
      (series) => `
        <tr>
          <th scope="row">${series.title}</th>
          <td>${series.total}종</td>
          <td><span class="source-pill source-pill--${series.verification}">${getVerificationLabel(series.verification)}</span></td>
          <td>${series.note}</td>
        </tr>
      `
    )
    .join("");
}

function renderStats(): void {
  const series = getCurrentSeries();
  const stickers = getCurrentStickers();
  const ownedCount = stickers.filter((sticker) => isOwned(sticker.order)).length;
  const duplicateCount = stickers.reduce(
    (total, sticker) => total + getStickerStatus(sticker.order).duplicateCount,
    0
  );
  const damagedCount = stickers.reduce((total, sticker) => total + getStickerStatus(sticker.order).damagedCount, 0);
  const totalCount = stickers.reduce((total, sticker) => total + getTotalStickerCount(getStickerStatus(sticker.order)), 0);
  const progressPercent = series.total > 0 ? Math.round((ownedCount / series.total) * 100) : 0;

  ownedCountElement.textContent = String(ownedCount);
  seriesTotalCountElement.textContent = String(series.total);
  totalCountElement.textContent = String(totalCount);
  duplicateCountElement.textContent = String(duplicateCount);
  damagedCountElement.textContent = String(damagedCount);
  progressBarElement.style.width = `${progressPercent}%`;
}

function renderCollectionHeader(): void {
  const series = getCurrentSeries();

  collectionTitleElement.textContent = series.title;
  collectionNoteElement.textContent =
    series.stickers.length > 0
      ? `${series.total}종 체크리스트입니다. 보관용 1장과 중복, 하자를 따로 기록할 수 있어요.`
      : `${series.total}종 시리즈 슬롯입니다. 실제 씰 목록을 채우면 바로 체크할 수 있습니다.`;
}

function renderFilterButtons(): void {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === appState.filterMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderGrid(visibleStickers: Sticker[]): void {
  const series = getCurrentSeries();
  gridElement.classList.toggle("collection-grid--empty", visibleStickers.length === 0);

  if (series.stickers.length === 0) {
    gridElement.innerHTML = createEmptyState(
      `${series.title} 데이터 준비 중`,
      `${series.total}종 시리즈 슬롯은 분리해뒀어요. 씰 목록을 채우면 이 시리즈도 바로 체크할 수 있습니다.`
    );
    return;
  }

  if (visibleStickers.length === 0) {
    gridElement.innerHTML = createEmptyState("조건에 맞는 띠부씰이 없어요", "검색어나 필터를 바꿔서 다시 확인해보세요.");
    return;
  }

  gridElement.innerHTML = visibleStickers.map(createStickerCard).join("");
}

function createStickerCard(sticker: Sticker): string {
  const status = getStickerStatus(sticker.order);
  const ownedClass = status.owned ? " is-owned" : "";
  const duplicateClass = status.duplicateCount > 0 ? " has-duplicate" : "";
  const damagedClass = status.damagedCount > 0 ? " has-damage" : "";
  const ownedChecked = status.owned ? "checked" : "";
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
          <span class="sticker-card__meta">#${padNumber(sticker.order)} · ${getStickerMetaLabel(sticker)}</span>
          <h2>${sticker.name}</h2>
          ${badges}
        </div>

        <div class="status-toggles" aria-label="${sticker.name} 상태 표시">
          <label class="status-toggle status-toggle--owned">
            <span>보관</span>
            <input type="checkbox" data-order="${sticker.order}" data-status="owned" ${ownedChecked} />
          </label>
          ${createCountControl(sticker, "duplicateCount", "중복", status.duplicateCount)}
          ${createCountControl(sticker, "damagedCount", "하자", status.damagedCount)}
        </div>
      </div>
    </article>
  `;
}

function createCountControl(sticker: Sticker, countStatusKey: CountStatusKey, label: string, value: number): string {
  const decrementDisabled = value === 0 ? "disabled" : "";

  return `
    <div class="count-row count-row--${countStatusKey}">
      <div class="count-row__label">
        <span>${label}</span>
        <span aria-hidden="true">|</span>
        <output>${formatCount(value)}</output>
      </div>
      <div class="count-stepper" aria-label="${sticker.name} ${label} 개수 조절">
        <button
          type="button"
          data-order="${sticker.order}"
          data-count-status="${countStatusKey}"
          data-step="-1"
          aria-label="${sticker.name} ${label} 1개 줄이기"
          ${decrementDisabled}
        >-</button>
        <button
          type="button"
          data-order="${sticker.order}"
          data-count-status="${countStatusKey}"
          data-step="1"
          aria-label="${sticker.name} ${label} 1개 늘리기"
        >+</button>
      </div>
    </div>
  `;
}

function createStatusBadges(status: StickerStatus): string {
  const totalCount = getTotalStickerCount(status);
  const badges = [
    status.owned ? { className: "status-badge--owned", label: "보관" } : undefined,
    totalCount > 0 ? { className: "status-badge--total", label: `총 ${formatCount(totalCount)}` } : undefined,
    status.duplicateCount > 0
      ? { className: "status-badge--duplicate", label: `중복 ${formatCount(status.duplicateCount)}` }
      : undefined,
    status.damagedCount > 0
      ? { className: "status-badge--damaged", label: `하자 ${formatCount(status.damagedCount)}` }
      : undefined
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

function createEmptyState(title: string, description: string): string {
  return `
    <div class="empty-state">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
}

function getVisibleStickers(): Sticker[] {
  const normalizedSearchTerm = appState.searchTerm.trim().toLowerCase();

  return getCurrentStickers().filter((sticker) => {
    const status = getStickerStatus(sticker.order);
    const matchesSearch =
      sticker.name.toLowerCase().includes(normalizedSearchTerm) ||
      String(sticker.order).includes(normalizedSearchTerm) ||
      String(sticker.dexNo).includes(normalizedSearchTerm);
    const matchesFilter =
      appState.filterMode === "all" ||
      (appState.filterMode === "owned" && status.owned) ||
      (appState.filterMode === "missing" && !status.owned) ||
      (appState.filterMode === "duplicate" && status.duplicateCount > 0) ||
      (appState.filterMode === "damaged" && status.damagedCount > 0);

    return matchesSearch && matchesFilter;
  });
}

function getCurrentSeries(): StickerSeries {
  return getSeriesById(appState.selectedSeriesId) ?? getSeriesById(DEFAULT_SERIES_ID) ?? stickerSeries[0];
}

function getCurrentStickers(): Sticker[] {
  return getCurrentSeries().stickers;
}

function getCurrentSeriesState(): CollectionState {
  const currentState = appState.collectionBySeries[appState.selectedSeriesId] ?? {};
  appState.collectionBySeries[appState.selectedSeriesId] = currentState;
  return currentState;
}

function getSeriesProgress(series: StickerSeries): { ownedCount: number; totalCount: number } {
  const state = appState.collectionBySeries[series.id] ?? {};
  const ownedCount = series.stickers.filter((sticker) => state[sticker.order]?.owned === true).length;
  const totalCount = series.stickers.reduce((total, sticker) => total + getTotalStickerCount(state[sticker.order] ?? createEmptyStatus()), 0);

  return { ownedCount, totalCount };
}

function getSeriesById(seriesId: string): StickerSeries | undefined {
  return stickerSeries.find((series) => series.id === seriesId);
}

function isOwned(stickerOrder: number): boolean {
  return getStickerStatus(stickerOrder).owned;
}

function getStickerStatus(stickerOrder: number): StickerStatus {
  return getCurrentSeriesState()[stickerOrder] ?? createEmptyStatus();
}

function setStickerStatus(stickerOrder: number, nextStatus: StickerStatus): void {
  const normalizedStatus = {
    owned: nextStatus.owned || nextStatus.duplicateCount > 0 || nextStatus.damagedCount > 0,
    duplicateCount: clampStatusCount(nextStatus.duplicateCount),
    damagedCount: clampStatusCount(nextStatus.damagedCount)
  };
  const currentSeriesState = getCurrentSeriesState();

  if (!normalizedStatus.owned) {
    delete currentSeriesState[stickerOrder];
    return;
  }

  currentSeriesState[stickerOrder] = normalizedStatus;
}

function createEmptyStatus(): StickerStatus {
  return {
    owned: false,
    duplicateCount: 0,
    damagedCount: 0
  };
}

function getTotalStickerCount(status: StickerStatus): number {
  return (status.owned ? 1 : 0) + status.duplicateCount + status.damagedCount;
}

function formatCount(value: number): string {
  return `${value}개`;
}

function getVerificationLabel(verification: StickerSeriesVerification): string {
  if (verification === "official") {
    return "공식 확인";
  }

  return verification === "checked" ? "교차 확인" : "검증 중";
}

function clampStatusCount(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(Math.max(Math.trunc(value), 0), MAX_STATUS_COUNT);
}

function padNumber(value: number): string {
  return String(value).padStart(2, "0");
}

function getStickerMetaLabel(sticker: Sticker): string {
  return sticker.dexNo > 0 ? `도감 ${sticker.dexNo}` : "스페셜";
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

function isCountStatusKey(value: string | undefined): value is CountStatusKey {
  return value === "duplicateCount" || value === "damagedCount";
}

function loadSelectedSeriesId(): string {
  const savedSeriesId = window.localStorage.getItem(SELECTED_SERIES_KEY);

  if (savedSeriesId && getSeriesById(savedSeriesId)) {
    return savedSeriesId;
  }

  return DEFAULT_SERIES_ID;
}

function loadViewMode(): ViewMode {
  return window.location.hash === "#collection" ? "collection" : "home";
}

function setViewMode(nextViewMode: ViewMode): void {
  appState.viewMode = nextViewMode;
  window.history.replaceState(null, "", nextViewMode === "collection" ? "#collection" : window.location.pathname + window.location.search);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadCollection(): SeriesCollectionState {
  const savedValue = window.localStorage.getItem(STORAGE_KEY);

  if (savedValue) {
    try {
      return parseSeriesCollectionState(JSON.parse(savedValue));
    } catch {
      return {};
    }
  }

  const legacyValue = window.localStorage.getItem(LEGACY_STORAGE_KEY);

  if (!legacyValue) {
    return {};
  }

  try {
    const legacyCollection = parseCollectionState(JSON.parse(legacyValue));
    return Object.keys(legacyCollection).length > 0 ? { [DEFAULT_SERIES_ID]: legacyCollection } : {};
  } catch {
    return {};
  }
}

function saveCollection(nextState: SeriesCollectionState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

function parseSeriesCollectionState(value: unknown): SeriesCollectionState {
  if (!isRecord(value)) {
    return {};
  }

  const nextState: SeriesCollectionState = {};

  for (const [seriesId, collectionValue] of Object.entries(value)) {
    if (!getSeriesById(seriesId)) {
      continue;
    }

    const collectionState = parseCollectionState(collectionValue);

    if (Object.keys(collectionState).length > 0) {
      nextState[seriesId] = collectionState;
    }
  }

  return nextState;
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
          duplicateCount: 0,
          damagedCount: 0
        };
      }
      continue;
    }

    if (!isRecord(statusValue)) {
      continue;
    }

    const duplicateCount = readStatusCount(statusValue.duplicateCount ?? statusValue.duplicate);
    const damagedCount = readStatusCount(statusValue.damagedCount ?? statusValue.damaged);
    const nextStatus = {
      owned: statusValue.owned === true || duplicateCount > 0 || damagedCount > 0,
      duplicateCount,
      damagedCount
    };

    if (nextStatus.owned) {
      nextState[stickerOrder] = nextStatus;
    }
  }

  return nextState;
}

function readStatusCount(value: unknown): number {
  if (typeof value === "number") {
    return clampStatusCount(value);
  }

  return value === true ? 1 : 0;
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
