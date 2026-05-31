(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const W=t=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${t}.png`,e=(t,n,o)=>({order:t,dexNo:n,name:o,imageUrl:W(n)}),H=[e(1,1,"이상해씨"),e(2,2,"이상해풀"),e(3,3,"이상해꽃"),e(4,4,"파이리"),e(5,5,"리자드"),e(6,6,"리자몽"),e(7,7,"꼬부기"),e(8,8,"어니부기"),e(9,9,"거북왕"),e(10,10,"캐터피"),e(11,11,"단데기"),e(12,12,"버터플"),e(13,13,"뿔충이"),e(14,14,"딱충이"),e(15,15,"독침붕"),e(16,16,"구구"),e(17,17,"피죤"),e(18,18,"피죤투"),e(19,19,"꼬렛"),e(20,20,"레트라"),e(21,23,"아보"),e(22,24,"아보크"),e(23,25,"피카츄"),e(24,26,"라이츄"),e(25,37,"식스테일"),e(26,38,"나인테일"),e(27,39,"푸린"),e(28,40,"푸크린"),e(29,41,"주뱃"),e(30,42,"골뱃"),e(31,52,"나옹"),e(32,53,"페르시온"),e(33,54,"고라파덕"),e(34,55,"골덕"),e(35,56,"망키"),e(36,57,"성원숭"),e(37,58,"가디"),e(38,59,"윈디"),e(39,63,"캐이시"),e(40,64,"윤겔라"),e(41,65,"후딘"),e(42,66,"알통몬"),e(43,67,"근육몬"),e(44,68,"괴력몬"),e(45,69,"모다피"),e(46,70,"우츠동"),e(47,71,"우츠보트"),e(48,74,"꼬마돌"),e(49,75,"데구리"),e(50,76,"딱구리"),e(51,77,"포니타"),e(52,78,"날쌩마"),e(53,79,"야돈"),e(54,80,"야도란"),e(55,81,"코일"),e(56,82,"레어코일"),e(57,83,"파오리"),e(58,84,"두두"),e(59,85,"두트리오"),e(60,88,"질퍽이"),e(61,89,"질뻐기"),e(62,92,"고오스"),e(63,93,"고우스트"),e(64,94,"팬텀"),e(65,95,"롱스톤"),e(66,100,"찌리리공"),e(67,101,"붐볼"),e(68,104,"탕구리"),e(69,105,"텅구리"),e(70,109,"또가스"),e(71,110,"또도가스"),e(72,111,"뿔카노"),e(73,112,"코뿌리"),e(74,113,"럭키"),e(75,114,"덩쿠리"),e(76,120,"별가사리"),e(77,121,"아쿠스타"),e(78,123,"스라크"),e(79,125,"에레브"),e(80,126,"마그마"),e(81,127,"쁘사이저"),e(82,128,"켄타로스"),e(83,129,"잉어킹"),e(84,130,"갸라도스"),e(85,131,"라프라스"),e(86,132,"메타몽"),e(87,133,"이브이"),e(88,134,"샤미드"),e(89,135,"쥬피썬더"),e(90,136,"부스터"),e(91,137,"폴리곤"),e(92,142,"프테라"),e(93,143,"잠만보"),e(94,144,"프리져"),e(95,145,"썬더"),e(96,146,"파이어"),e(97,147,"미뇽"),e(98,148,"신뇽"),e(99,149,"망나뇽"),e(100,150,"뮤츠")],$="anniversary-30",C=[{id:"anniversary-30",title:"2026 Since 1996 30주년",shortTitle:"30주년",total:100,verification:"official",note:"현재 체크리스트에 입력된 100종 시리즈입니다.",stickers:H},{id:"kanto-2022",title:"2022 관동",shortTitle:"관동",total:159,verification:"official",note:"돌아온 포켓몬빵 1차 라인업입니다.",stickers:[]},{id:"johto-2022",title:"2022 성도",shortTitle:"성도",total:116,verification:"official",note:"2세대 포켓몬 추가 라인업입니다.",stickers:[]},{id:"halloween-2022",title:"2022 할로윈 야광",shortTitle:"할로윈",total:27,verification:"checking",note:"야광 콘셉트 한정 라인업으로 추가 검증 중입니다.",stickers:[]},{id:"winter-2022",title:"2022/2023 윈터 왕띠부씰",shortTitle:"윈터",total:30,verification:"checking",note:"왕띠부씰 계열로 일반 띠부씰과 별도 관리 예정입니다.",stickers:[]},{id:"lovely-2023",title:"2023 러블리",shortTitle:"러블리",total:30,verification:"official",note:"러블리 콘셉트 한정 라인업입니다.",stickers:[]},{id:"paldea-arceus-2023",title:"2023 팔데아/아르세우스",shortTitle:"팔데아",total:55,verification:"official",note:"신규 세대 중심 추가 라인업입니다.",stickers:[]},{id:"new-season-1-2024",title:"2024 NEW 시즌1",shortTitle:"NEW 1",total:139,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"new-season-2-2024",title:"2024 NEW 시즌2",shortTitle:"NEW 2",total:163,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"mega-2024",title:"2024 메가진화",shortTitle:"메가진화",total:53,verification:"checking",note:"이벤트/한정 성격을 확인 중입니다.",stickers:[]},{id:"new-season-3-2024",title:"2024 NEW 시즌3",shortTitle:"NEW 3",total:154,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"pixel-art-2024",title:"2024 픽셀아트",shortTitle:"픽셀",total:151,verification:"checked",note:"1세대 픽셀아트 스타일 라인업입니다.",stickers:[]},{id:"pokepeace-2025",title:"2025 포켓피스",shortTitle:"포켓피스",total:114,verification:"checking",note:"별도 콘셉트 시리즈로 분리 예정입니다.",stickers:[]},{id:"new-season-4-2025",title:"2025 NEW 시즌4",shortTitle:"NEW 4",total:168,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"new-season-5-2026",title:"2026 NEW 시즌5",shortTitle:"NEW 5",total:150,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]}],L="pokemon-sticker-collection-by-series",P="since-1996-pokemon-sticker-collection",I="pokemon-sticker-collection-selected-series",F=99,s={collectionBySeries:ut(),selectedSeriesId:lt(),searchTerm:"",filterMode:"all"},m=l("#collection-grid"),_=l("#series-tabs"),G=l("#series-guide-body"),w=l("#search-input"),R=l("#owned-count"),U=l("#series-total-count"),V=l("#total-count"),K=l("#duplicate-count"),q=l("#damaged-count"),D=l("#progress-bar"),Y=l("#clear-button"),M=document.querySelectorAll("[data-filter]");g();w.addEventListener("input",()=>{s.searchTerm=w.value,g()});M.forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.filter;ct(n)&&(s.filterMode=n,g())})});_.addEventListener("click",t=>{const n=t.target;if(!(n instanceof Element))return;const o=n.closest("[data-series-id]");if(!(o instanceof HTMLButtonElement))return;const r=o.dataset.seriesId;!r||!p(r)||(s.selectedSeriesId=r,s.searchTerm="",s.filterMode="all",w.value="",window.localStorage.setItem(I,r),g())});Y.addEventListener("click",()=>{delete s.collectionBySeries[s.selectedSeriesId],E(s.collectionBySeries),g()});m.addEventListener("change",t=>{const n=t.target;if(!(n instanceof HTMLInputElement))return;const o=n.dataset.order,r=n.dataset.status;if(!o||r!=="owned")return;const i=Number(o),a={...f(i),owned:n.checked};n.checked||(a.duplicateCount=0,a.damagedCount=0),x(i,a),E(s.collectionBySeries),g()});m.addEventListener("click",t=>{const n=t.target;if(!(n instanceof Element))return;const o=n.closest("[data-count-status][data-step][data-order]");if(!(o instanceof HTMLButtonElement))return;const r=o.dataset.order,i=o.dataset.countStatus,a=Number(o.dataset.step);if(!r||!dt(i)||!Number.isInteger(a))return;const c=Number(r),d=f(c),u={...d,[i]:h(d[i]+a)};(u.duplicateCount>0||u.damagedCount>0)&&(u.owned=!0),x(c,u),E(s.collectionBySeries),g()});function g(){z(),X(),Q(),Z(),tt(ot())}function z(){_.innerHTML=C.map(J).join("")}function J(t){const n=t.id===s.selectedSeriesId,o=rt(t),r=t.stickers.length>0?"체크 가능":"데이터 준비중",i=n?" is-active":"",a=t.stickers.length===0?" is-pending":"";return`
    <button
      type="button"
      class="series-tab${i}${a}"
      data-series-id="${t.id}"
      role="tab"
      aria-selected="${String(n)}"
    >
      <span class="series-tab__name">${t.shortTitle}</span>
      <span class="series-tab__meta">${t.total}종 · ${r}</span>
      <span class="series-tab__progress">${o.ownedCount} / ${t.total}</span>
    </button>
  `}function X(){G.innerHTML=C.map(t=>`
        <tr>
          <th scope="row">${t.title}</th>
          <td>${t.total}종</td>
          <td><span class="source-pill source-pill--${t.verification}">${at(t.verification)}</span></td>
          <td>${t.note}</td>
        </tr>
      `).join("")}function Q(){const t=y(),n=O(),o=n.filter(d=>it(d.order)).length,r=n.reduce((d,u)=>d+f(u.order).duplicateCount,0),i=n.reduce((d,u)=>d+f(u.order).damagedCount,0),a=n.reduce((d,u)=>d+k(f(u.order)),0),c=t.total>0?Math.round(o/t.total*100):0;R.textContent=String(o),U.textContent=String(t.total),V.textContent=String(a),K.textContent=String(r),q.textContent=String(i),D.style.width=`${c}%`}function Z(){M.forEach(t=>{const n=t.dataset.filter===s.filterMode;t.classList.toggle("is-active",n),t.setAttribute("aria-pressed",String(n))})}function tt(t){const n=y();if(m.classList.toggle("collection-grid--empty",t.length===0),n.stickers.length===0){m.innerHTML=T(`${n.title} 데이터 준비 중`,`${n.total}종 시리즈 슬롯은 분리해뒀어요. 씰 목록을 채우면 이 시리즈도 바로 체크할 수 있습니다.`);return}if(t.length===0){m.innerHTML=T("조건에 맞는 띠부씰이 없어요","검색어나 필터를 바꿔서 다시 확인해보세요.");return}m.innerHTML=t.map(et).join("")}function et(t){const n=f(t.order),o=n.owned?" is-owned":"",r=n.duplicateCount>0?" has-duplicate":"",i=n.damagedCount>0?" has-damage":"",a=n.owned?"checked":"",c=nt(n);return`
    <article class="sticker-card${o}${r}${i}">
      <div class="sticker-card__image-wrap">
        <img
          class="sticker-card__image"
          src="${t.imageUrl}"
          alt="${t.name} 띠부씰 이미지"
          loading="lazy"
        />
      </div>

      <div class="sticker-card__body">
        <div>
          <span class="sticker-card__meta">#${st(t.order)} · 도감 ${t.dexNo}</span>
          <h2>${t.name}</h2>
          ${c}
        </div>

        <div class="status-toggles" aria-label="${t.name} 상태 표시">
          <label class="status-toggle status-toggle--owned">
            <span>보관</span>
            <input type="checkbox" data-order="${t.order}" data-status="owned" ${a} />
          </label>
          ${v(t,"duplicateCount","중복",n.duplicateCount)}
          ${v(t,"damagedCount","하자",n.damagedCount)}
        </div>
      </div>
    </article>
  `}function v(t,n,o,r){const i=r===0?"disabled":"";return`
    <div class="count-row count-row--${n}">
      <div class="count-row__label">
        <span>${o}</span>
        <span aria-hidden="true">|</span>
        <output>${S(r)}</output>
      </div>
      <div class="count-stepper" aria-label="${t.name} ${o} 개수 조절">
        <button
          type="button"
          data-order="${t.order}"
          data-count-status="${n}"
          data-step="-1"
          aria-label="${t.name} ${o} 1개 줄이기"
          ${i}
        >-</button>
        <button
          type="button"
          data-order="${t.order}"
          data-count-status="${n}"
          data-step="1"
          aria-label="${t.name} ${o} 1개 늘리기"
        >+</button>
      </div>
    </div>
  `}function nt(t){const n=k(t),o=[t.owned?{className:"status-badge--owned",label:"보관"}:void 0,n>0?{className:"status-badge--total",label:`총 ${S(n)}`}:void 0,t.duplicateCount>0?{className:"status-badge--duplicate",label:`중복 ${S(t.duplicateCount)}`}:void 0,t.damagedCount>0?{className:"status-badge--damaged",label:`하자 ${S(t.damagedCount)}`}:void 0].filter(r=>r!==void 0);return o.length===0?"":`
    <div class="sticker-card__badges" aria-label="표시된 상태">
      ${o.map(r=>`<span class="${r.className}">${r.label}</span>`).join("")}
    </div>
  `}function T(t,n){return`
    <div class="empty-state">
      <h2>${t}</h2>
      <p>${n}</p>
    </div>
  `}function ot(){const t=s.searchTerm.trim().toLowerCase();return O().filter(n=>{const o=f(n.order),r=n.name.toLowerCase().includes(t)||String(n.order).includes(t)||String(n.dexNo).includes(t),i=s.filterMode==="all"||s.filterMode==="owned"&&o.owned||s.filterMode==="missing"&&!o.owned||s.filterMode==="duplicate"&&o.duplicateCount>0||s.filterMode==="damaged"&&o.damagedCount>0;return r&&i})}function y(){return p(s.selectedSeriesId)??p($)??C[0]}function O(){return y().stickers}function B(){const t=s.collectionBySeries[s.selectedSeriesId]??{};return s.collectionBySeries[s.selectedSeriesId]=t,t}function rt(t){const n=s.collectionBySeries[t.id]??{},o=t.stickers.filter(i=>{var a;return((a=n[i.order])==null?void 0:a.owned)===!0}).length,r=t.stickers.reduce((i,a)=>i+k(n[a.order]??A()),0);return{ownedCount:o,totalCount:r}}function p(t){return C.find(n=>n.id===t)}function it(t){return f(t).owned}function f(t){return B()[t]??A()}function x(t,n){const o={owned:n.owned||n.duplicateCount>0||n.damagedCount>0,duplicateCount:h(n.duplicateCount),damagedCount:h(n.damagedCount)},r=B();if(!o.owned){delete r[t];return}r[t]=o}function A(){return{owned:!1,duplicateCount:0,damagedCount:0}}function k(t){return(t.owned?1:0)+t.duplicateCount+t.damagedCount}function S(t){return`${t}개`}function at(t){return t==="official"?"공식 확인":t==="checked"?"교차 확인":"검증 중"}function h(t){return Number.isFinite(t)?Math.min(Math.max(Math.trunc(t),0),F):0}function st(t){return String(t).padStart(2,"0")}function ct(t){return t==="all"||t==="owned"||t==="missing"||t==="duplicate"||t==="damaged"}function dt(t){return t==="duplicateCount"||t==="damagedCount"}function lt(){const t=window.localStorage.getItem(I);return t&&p(t)?t:$}function ut(){const t=window.localStorage.getItem(L);if(t)try{return ft(JSON.parse(t))}catch{return{}}const n=window.localStorage.getItem(P);if(!n)return{};try{const o=j(JSON.parse(n));return Object.keys(o).length>0?{[$]:o}:{}}catch{return{}}}function E(t){window.localStorage.setItem(L,JSON.stringify(t))}function ft(t){if(!b(t))return{};const n={};for(const[o,r]of Object.entries(t)){if(!p(o))continue;const i=j(r);Object.keys(i).length>0&&(n[o]=i)}return n}function j(t){if(!b(t))return{};const n={};for(const[o,r]of Object.entries(t)){const i=Number(o);if(!Number.isInteger(i))continue;if(typeof r=="boolean"){r&&(n[i]={owned:!0,duplicateCount:0,damagedCount:0});continue}if(!b(r))continue;const a=N(r.duplicateCount??r.duplicate),c=N(r.damagedCount??r.damaged),d={owned:r.owned===!0||a>0||c>0,duplicateCount:a,damagedCount:c};d.owned&&(n[i]=d)}return n}function N(t){return typeof t=="number"?h(t):t===!0?1:0}function b(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function l(t){const n=document.querySelector(t);if(!n)throw new Error(`필수 화면 요소를 찾지 못했습니다: ${t}`);return n}
