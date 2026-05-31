/**
 * 30주년 Since 1996 띠부씰 100종 데이터입니다.
 *
 * TypeScript 학습 포인트:
 * - `export type`은 다른 파일에서 쓸 수 있는 타입 이름을 내보냅니다.
 * - `readonly`는 앱 실행 중 실수로 값을 바꾸지 못하게 도와줍니다.
 * - 실제 띠부씰 사진을 직접 보유하면 저작권/파일 관리 문제가 생길 수 있어,
 *   현재는 공개 포켓몬 아트워크 URL을 기본 이미지로 연결했습니다.
 *   나중에 직접 찍은 씰 사진을 쓰려면 `imageUrl` 생성 방식을 바꾸면 됩니다.
 */
export type Sticker = {
  readonly order: number;
  readonly dexNo: number;
  readonly name: string;
  readonly imageUrl: string;
};

export type StickerSeriesVerification = "official" | "checked" | "checking";

export type StickerSeries = {
  readonly id: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly total: number;
  readonly verification: StickerSeriesVerification;
  readonly note: string;
  readonly stickers: Sticker[];
};

/**
 * 함수의 매개변수와 반환값에 타입을 붙이면, 잘못된 값을 넣었을 때 TS가 미리 알려줍니다.
 * 예: `makeArtworkUrl("피카츄")`처럼 문자열을 넣으면 컴파일 오류가 납니다.
 */
const makeArtworkUrl = (dexNo: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexNo}.png`;

const makeSticker = (order: number, dexNo: number, name: string): Sticker => ({
  order,
  dexNo,
  name,
  imageUrl: makeArtworkUrl(dexNo)
});

const anniversary30Stickers: Sticker[] = [
  makeSticker(1, 1, "이상해씨"),
  makeSticker(2, 2, "이상해풀"),
  makeSticker(3, 3, "이상해꽃"),
  makeSticker(4, 4, "파이리"),
  makeSticker(5, 5, "리자드"),
  makeSticker(6, 6, "리자몽"),
  makeSticker(7, 7, "꼬부기"),
  makeSticker(8, 8, "어니부기"),
  makeSticker(9, 9, "거북왕"),
  makeSticker(10, 10, "캐터피"),
  makeSticker(11, 11, "단데기"),
  makeSticker(12, 12, "버터플"),
  makeSticker(13, 13, "뿔충이"),
  makeSticker(14, 14, "딱충이"),
  makeSticker(15, 15, "독침붕"),
  makeSticker(16, 16, "구구"),
  makeSticker(17, 17, "피죤"),
  makeSticker(18, 18, "피죤투"),
  makeSticker(19, 19, "꼬렛"),
  makeSticker(20, 20, "레트라"),
  makeSticker(21, 23, "아보"),
  makeSticker(22, 24, "아보크"),
  makeSticker(23, 25, "피카츄"),
  makeSticker(24, 26, "라이츄"),
  makeSticker(25, 37, "식스테일"),
  makeSticker(26, 38, "나인테일"),
  makeSticker(27, 39, "푸린"),
  makeSticker(28, 40, "푸크린"),
  makeSticker(29, 41, "주뱃"),
  makeSticker(30, 42, "골뱃"),
  makeSticker(31, 52, "나옹"),
  makeSticker(32, 53, "페르시온"),
  makeSticker(33, 54, "고라파덕"),
  makeSticker(34, 55, "골덕"),
  makeSticker(35, 56, "망키"),
  makeSticker(36, 57, "성원숭"),
  makeSticker(37, 58, "가디"),
  makeSticker(38, 59, "윈디"),
  makeSticker(39, 63, "캐이시"),
  makeSticker(40, 64, "윤겔라"),
  makeSticker(41, 65, "후딘"),
  makeSticker(42, 66, "알통몬"),
  makeSticker(43, 67, "근육몬"),
  makeSticker(44, 68, "괴력몬"),
  makeSticker(45, 69, "모다피"),
  makeSticker(46, 70, "우츠동"),
  makeSticker(47, 71, "우츠보트"),
  makeSticker(48, 74, "꼬마돌"),
  makeSticker(49, 75, "데구리"),
  makeSticker(50, 76, "딱구리"),
  makeSticker(51, 77, "포니타"),
  makeSticker(52, 78, "날쌩마"),
  makeSticker(53, 79, "야돈"),
  makeSticker(54, 80, "야도란"),
  makeSticker(55, 81, "코일"),
  makeSticker(56, 82, "레어코일"),
  makeSticker(57, 83, "파오리"),
  makeSticker(58, 84, "두두"),
  makeSticker(59, 85, "두트리오"),
  makeSticker(60, 88, "질퍽이"),
  makeSticker(61, 89, "질뻐기"),
  makeSticker(62, 92, "고오스"),
  makeSticker(63, 93, "고우스트"),
  makeSticker(64, 94, "팬텀"),
  makeSticker(65, 95, "롱스톤"),
  makeSticker(66, 100, "찌리리공"),
  makeSticker(67, 101, "붐볼"),
  makeSticker(68, 104, "탕구리"),
  makeSticker(69, 105, "텅구리"),
  makeSticker(70, 109, "또가스"),
  makeSticker(71, 110, "또도가스"),
  makeSticker(72, 111, "뿔카노"),
  makeSticker(73, 112, "코뿌리"),
  makeSticker(74, 113, "럭키"),
  makeSticker(75, 114, "덩쿠리"),
  makeSticker(76, 120, "별가사리"),
  makeSticker(77, 121, "아쿠스타"),
  makeSticker(78, 123, "스라크"),
  makeSticker(79, 125, "에레브"),
  makeSticker(80, 126, "마그마"),
  makeSticker(81, 127, "쁘사이저"),
  makeSticker(82, 128, "켄타로스"),
  makeSticker(83, 129, "잉어킹"),
  makeSticker(84, 130, "갸라도스"),
  makeSticker(85, 131, "라프라스"),
  makeSticker(86, 132, "메타몽"),
  makeSticker(87, 133, "이브이"),
  makeSticker(88, 134, "샤미드"),
  makeSticker(89, 135, "쥬피썬더"),
  makeSticker(90, 136, "부스터"),
  makeSticker(91, 137, "폴리곤"),
  makeSticker(92, 142, "프테라"),
  makeSticker(93, 143, "잠만보"),
  makeSticker(94, 144, "프리져"),
  makeSticker(95, 145, "썬더"),
  makeSticker(96, 146, "파이어"),
  makeSticker(97, 147, "미뇽"),
  makeSticker(98, 148, "신뇽"),
  makeSticker(99, 149, "망나뇽"),
  makeSticker(100, 150, "뮤츠")
];

export const DEFAULT_SERIES_ID = "anniversary-30";

export const stickerSeries: StickerSeries[] = [
  {
    id: "anniversary-30",
    title: "2026 Since 1996 30주년",
    shortTitle: "30주년",
    total: 100,
    verification: "official",
    note: "현재 체크리스트에 입력된 100종 시리즈입니다.",
    stickers: anniversary30Stickers
  },
  {
    id: "kanto-2022",
    title: "2022 관동",
    shortTitle: "관동",
    total: 159,
    verification: "official",
    note: "돌아온 포켓몬빵 1차 라인업입니다.",
    stickers: []
  },
  {
    id: "johto-2022",
    title: "2022 성도",
    shortTitle: "성도",
    total: 116,
    verification: "official",
    note: "2세대 포켓몬 추가 라인업입니다.",
    stickers: []
  },
  {
    id: "halloween-2022",
    title: "2022 할로윈 야광",
    shortTitle: "할로윈",
    total: 27,
    verification: "checking",
    note: "야광 콘셉트 한정 라인업으로 추가 검증 중입니다.",
    stickers: []
  },
  {
    id: "winter-2022",
    title: "2022/2023 윈터 왕띠부씰",
    shortTitle: "윈터",
    total: 30,
    verification: "checking",
    note: "왕띠부씰 계열로 일반 띠부씰과 별도 관리 예정입니다.",
    stickers: []
  },
  {
    id: "lovely-2023",
    title: "2023 러블리",
    shortTitle: "러블리",
    total: 30,
    verification: "official",
    note: "러블리 콘셉트 한정 라인업입니다.",
    stickers: []
  },
  {
    id: "paldea-arceus-2023",
    title: "2023 팔데아/아르세우스",
    shortTitle: "팔데아",
    total: 55,
    verification: "official",
    note: "신규 세대 중심 추가 라인업입니다.",
    stickers: []
  },
  {
    id: "new-season-1-2024",
    title: "2024 NEW 시즌1",
    shortTitle: "NEW 1",
    total: 139,
    verification: "checking",
    note: "수집가 도감 기준으로 교차 검증 중입니다.",
    stickers: []
  },
  {
    id: "new-season-2-2024",
    title: "2024 NEW 시즌2",
    shortTitle: "NEW 2",
    total: 163,
    verification: "checking",
    note: "수집가 도감 기준으로 교차 검증 중입니다.",
    stickers: []
  },
  {
    id: "mega-2024",
    title: "2024 메가진화",
    shortTitle: "메가진화",
    total: 53,
    verification: "checking",
    note: "이벤트/한정 성격을 확인 중입니다.",
    stickers: []
  },
  {
    id: "new-season-3-2024",
    title: "2024 NEW 시즌3",
    shortTitle: "NEW 3",
    total: 154,
    verification: "checking",
    note: "수집가 도감 기준으로 교차 검증 중입니다.",
    stickers: []
  },
  {
    id: "pixel-art-2024",
    title: "2024 픽셀아트",
    shortTitle: "픽셀",
    total: 151,
    verification: "checked",
    note: "1세대 픽셀아트 스타일 라인업입니다.",
    stickers: []
  },
  {
    id: "pokepeace-2025",
    title: "2025 포켓피스",
    shortTitle: "포켓피스",
    total: 114,
    verification: "checking",
    note: "별도 콘셉트 시리즈로 분리 예정입니다.",
    stickers: []
  },
  {
    id: "new-season-4-2025",
    title: "2025 NEW 시즌4",
    shortTitle: "NEW 4",
    total: 168,
    verification: "checking",
    note: "수집가 도감 기준으로 교차 검증 중입니다.",
    stickers: []
  },
  {
    id: "new-season-5-2026",
    title: "2026 NEW 시즌5",
    shortTitle: "NEW 5",
    total: 150,
    verification: "checking",
    note: "수집가 도감 기준으로 교차 검증 중입니다.",
    stickers: []
  }
];

export const stickers = anniversary30Stickers;
