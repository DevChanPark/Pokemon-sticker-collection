# Since 1996 포켓몬 띠부씰 컬렉션

포켓몬빵 30주년 Since 1996 띠부씰 100종을 체크하는 TypeScript 학습용 웹앱입니다.

## 실행

```bash
npm install
npm run dev
```

## 배포

이 저장소는 GitHub Pages 자동 배포가 설정되어 있습니다.

1. `main` 브랜치에 push
2. GitHub Actions가 `npm ci`와 `npm run build` 실행
3. 빌드 결과물 `dist`를 GitHub Pages에 배포

배포 주소:

```text
https://louisycp.github.io/Pok-mon-sticker-collection/
```

## 현재 기능

- 띠부씰 이미지와 이름 표시
- 보관 여부 체크
- 보관 수와 진행률 표시
- 이름, 순번, 도감 번호 검색
- 전체/보관/미보관 필터
- 체크 상태를 `localStorage`에 저장

## 학습 포인트

- `src/stickers.ts`: 타입 정의, 함수 반환 타입, 배열 데이터
- `src/main.ts`: DOM 선택, 이벤트 처리, 배열 메서드, localStorage, 타입 가드
- `src/styles.css`: 반응형 그리드, 상태별 카드 스타일

## 이미지 교체

현재 이미지는 PokeAPI의 공개 아트워크 URL을 사용합니다. 직접 찍은 실제 띠부씰 사진을 쓰려면 `src/stickers.ts`의 `makeArtworkUrl` 또는 각 데이터의 `imageUrl` 구조를 바꾸면 됩니다.
