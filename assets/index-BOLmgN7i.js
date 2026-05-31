(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const W=t=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${t}.png`,e=(t,n,o)=>({order:t,dexNo:n,name:o,imageUrl:W(n)}),G=[e(1,1,"이상해씨"),e(2,2,"이상해풀"),e(3,3,"이상해꽃"),e(4,4,"파이리"),e(5,5,"리자드"),e(6,6,"리자몽"),e(7,7,"꼬부기"),e(8,8,"어니부기"),e(9,9,"거북왕"),e(10,10,"캐터피"),e(11,11,"단데기"),e(12,12,"버터플"),e(13,13,"뿔충이"),e(14,14,"딱충이"),e(15,15,"독침붕"),e(16,16,"구구"),e(17,17,"피죤"),e(18,18,"피죤투"),e(19,19,"꼬렛"),e(20,20,"레트라"),e(21,23,"아보"),e(22,24,"아보크"),e(23,25,"피카츄"),e(24,26,"라이츄"),e(25,37,"식스테일"),e(26,38,"나인테일"),e(27,39,"푸린"),e(28,40,"푸크린"),e(29,41,"주뱃"),e(30,42,"골뱃"),e(31,52,"나옹"),e(32,53,"페르시온"),e(33,54,"고라파덕"),e(34,55,"골덕"),e(35,56,"망키"),e(36,57,"성원숭"),e(37,58,"가디"),e(38,59,"윈디"),e(39,63,"캐이시"),e(40,64,"윤겔라"),e(41,65,"후딘"),e(42,66,"알통몬"),e(43,67,"근육몬"),e(44,68,"괴력몬"),e(45,69,"모다피"),e(46,70,"우츠동"),e(47,71,"우츠보트"),e(48,74,"꼬마돌"),e(49,75,"데구리"),e(50,76,"딱구리"),e(51,77,"포니타"),e(52,78,"날쌩마"),e(53,79,"야돈"),e(54,80,"야도란"),e(55,81,"코일"),e(56,82,"레어코일"),e(57,83,"파오리"),e(58,84,"두두"),e(59,85,"두트리오"),e(60,88,"질퍽이"),e(61,89,"질뻐기"),e(62,92,"고오스"),e(63,93,"고우스트"),e(64,94,"팬텀"),e(65,95,"롱스톤"),e(66,100,"찌리리공"),e(67,101,"붐볼"),e(68,104,"탕구리"),e(69,105,"텅구리"),e(70,109,"또가스"),e(71,110,"또도가스"),e(72,111,"뿔카노"),e(73,112,"코뿌리"),e(74,113,"럭키"),e(75,114,"덩쿠리"),e(76,120,"별가사리"),e(77,121,"아쿠스타"),e(78,123,"스라크"),e(79,125,"에레브"),e(80,126,"마그마"),e(81,127,"쁘사이저"),e(82,128,"켄타로스"),e(83,129,"잉어킹"),e(84,130,"갸라도스"),e(85,131,"라프라스"),e(86,132,"메타몽"),e(87,133,"이브이"),e(88,134,"샤미드"),e(89,135,"쥬피썬더"),e(90,136,"부스터"),e(91,137,"폴리곤"),e(92,142,"프테라"),e(93,143,"잠만보"),e(94,144,"프리져"),e(95,145,"썬더"),e(96,146,"파이어"),e(97,147,"미뇽"),e(98,148,"신뇽"),e(99,149,"망나뇽"),e(100,150,"뮤츠")],E="anniversary-30",w=[{id:"anniversary-30",title:"2026 Since 1996 30주년",shortTitle:"30주년",total:100,verification:"official",note:"현재 체크리스트에 입력된 100종 시리즈입니다.",stickers:G},{id:"kanto-2022",title:"2022 관동",shortTitle:"관동",total:159,verification:"official",note:"돌아온 포켓몬빵 1차 라인업입니다.",stickers:[]},{id:"johto-2022",title:"2022 성도",shortTitle:"성도",total:116,verification:"official",note:"2세대 포켓몬 추가 라인업입니다.",stickers:[]},{id:"halloween-2022",title:"2022 할로윈 야광",shortTitle:"할로윈",total:27,verification:"checking",note:"야광 콘셉트 한정 라인업으로 추가 검증 중입니다.",stickers:[]},{id:"winter-2022",title:"2022/2023 윈터 왕띠부씰",shortTitle:"윈터",total:30,verification:"checking",note:"왕띠부씰 계열로 일반 띠부씰과 별도 관리 예정입니다.",stickers:[]},{id:"lovely-2023",title:"2023 러블리",shortTitle:"러블리",total:30,verification:"official",note:"러블리 콘셉트 한정 라인업입니다.",stickers:[]},{id:"paldea-arceus-2023",title:"2023 팔데아/아르세우스",shortTitle:"팔데아",total:55,verification:"official",note:"신규 세대 중심 추가 라인업입니다.",stickers:[]},{id:"new-season-1-2024",title:"2024 NEW 시즌1",shortTitle:"NEW 1",total:139,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"new-season-2-2024",title:"2024 NEW 시즌2",shortTitle:"NEW 2",total:163,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"mega-2024",title:"2024 메가진화",shortTitle:"메가진화",total:53,verification:"checking",note:"이벤트/한정 성격을 확인 중입니다.",stickers:[]},{id:"new-season-3-2024",title:"2024 NEW 시즌3",shortTitle:"NEW 3",total:154,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"pixel-art-2024",title:"2024 픽셀아트",shortTitle:"픽셀",total:151,verification:"checked",note:"1세대 픽셀아트 스타일 라인업입니다.",stickers:[]},{id:"pokepeace-2025",title:"2025 포켓피스",shortTitle:"포켓피스",total:114,verification:"checking",note:"별도 콘셉트 시리즈로 분리 예정입니다.",stickers:[]},{id:"new-season-4-2025",title:"2025 NEW 시즌4",shortTitle:"NEW 4",total:168,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]},{id:"new-season-5-2026",title:"2026 NEW 시즌5",shortTitle:"NEW 5",total:150,verification:"checking",note:"수집가 도감 기준으로 교차 검증 중입니다.",stickers:[]}],L="pokemon-sticker-collection-by-series",P="since-1996-pokemon-sticker-collection",M="pokemon-sticker-collection-selected-series",F=99,c={collectionBySeries:$t(),selectedSeriesId:Ct(),searchTerm:"",filterMode:"all",viewMode:H()},R=s("#home-view"),U=s("#collection-view"),g=s("#collection-grid"),_=s("#home-series-grid"),K=s("#series-guide-body"),$=s("#search-input"),q=s("#home-button"),D=s("#collection-title"),Y=s("#collection-note"),z=s("#owned-count"),J=s("#series-total-count"),X=s("#total-count"),Q=s("#duplicate-count"),Z=s("#damaged-count"),tt=s("#progress-bar"),et=s("#clear-button"),I=document.querySelectorAll("[data-filter]");f();$.addEventListener("input",()=>{c.searchTerm=$.value,f()});I.forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.filter;St(n)&&(c.filterMode=n,f())})});_.addEventListener("click",t=>{const n=t.target;if(!(n instanceof Element))return;const o=n.closest("[data-series-id][data-open-series]");if(!(o instanceof HTMLButtonElement))return;const i=o.dataset.seriesId;!i||!p(i)||(c.selectedSeriesId=i,c.searchTerm="",c.filterMode="all",$.value="",window.localStorage.setItem(M,i),j("collection"),f())});q.addEventListener("click",()=>{j("home"),f()});window.addEventListener("hashchange",()=>{c.viewMode=H(),f()});et.addEventListener("click",()=>{delete c.collectionBySeries[c.selectedSeriesId],v(c.collectionBySeries),f()});g.addEventListener("change",t=>{const n=t.target;if(!(n instanceof HTMLInputElement))return;const o=n.dataset.order,i=n.dataset.status;if(!o||i!=="owned")return;const r=Number(o),a={...m(r),owned:n.checked};n.checked||(a.duplicateCount=0,a.damagedCount=0),x(r,a),v(c.collectionBySeries),f()});g.addEventListener("click",t=>{const n=t.target;if(!(n instanceof Element))return;const o=n.closest("[data-count-status][data-step][data-order]");if(!(o instanceof HTMLButtonElement))return;const i=o.dataset.order,r=o.dataset.countStatus,a=Number(o.dataset.step);if(!i||!wt(r)||!Number.isInteger(a))return;const d=Number(i),l=m(d),u={...l,[r]:S(l[r]+a)};(u.duplicateCount>0||u.damagedCount>0)&&(u.owned=!0),x(d,u),v(c.collectionBySeries),f()});function f(){nt(),ot(),rt(),ct(),at(),st(),dt(ft())}function nt(){const t=c.viewMode==="home";R.hidden=!t,U.hidden=t}function ot(){_.innerHTML=w.map(it).join("")}function it(t){const n=t.id===c.selectedSeriesId,o=mt(t),i=t.stickers.length>0?"체크 가능":"데이터 준비중",r=n?" is-active":"",a=t.stickers.length===0?" is-pending":"",d=t.stickers.length>0?`${o.ownedCount} / ${t.total}`:`0 / ${t.total}`;return`
    <button
      type="button"
      class="home-series-card${r}${a}"
      data-series-id="${t.id}"
      data-open-series="true"
      aria-label="${t.title} 체크리스트 열기"
    >
      <span class="home-series-card__name">${t.title}</span>
      <span class="home-series-card__meta">${t.total}종 · ${i}</span>
      <span class="home-series-card__progress">${d}</span>
      <span class="home-series-card__note">${t.note}</span>
    </button>
  `}function rt(){K.innerHTML=w.map(t=>`
        <tr>
          <th scope="row">${t.title}</th>
          <td>${t.total}종</td>
          <td><span class="source-pill source-pill--${t.verification}">${pt(t.verification)}</span></td>
          <td>${t.note}</td>
        </tr>
      `).join("")}function at(){const t=C(),n=O(),o=n.filter(l=>gt(l.order)).length,i=n.reduce((l,u)=>l+m(u.order).duplicateCount,0),r=n.reduce((l,u)=>l+m(u.order).damagedCount,0),a=n.reduce((l,u)=>l+k(m(u.order)),0),d=t.total>0?Math.round(o/t.total*100):0;z.textContent=String(o),J.textContent=String(t.total),X.textContent=String(a),Q.textContent=String(i),Z.textContent=String(r),tt.style.width=`${d}%`}function ct(){const t=C();D.textContent=t.title,Y.textContent=t.stickers.length>0?`${t.total}종 체크리스트입니다. 보관용 1장과 중복, 하자를 따로 기록할 수 있어요.`:`${t.total}종 시리즈 슬롯입니다. 실제 씰 목록을 채우면 바로 체크할 수 있습니다.`}function st(){I.forEach(t=>{const n=t.dataset.filter===c.filterMode;t.classList.toggle("is-active",n),t.setAttribute("aria-pressed",String(n))})}function dt(t){const n=C();if(g.classList.toggle("collection-grid--empty",t.length===0),n.stickers.length===0){g.innerHTML=T(`${n.title} 데이터 준비 중`,`${n.total}종 시리즈 슬롯은 분리해뒀어요. 씰 목록을 채우면 이 시리즈도 바로 체크할 수 있습니다.`);return}if(t.length===0){g.innerHTML=T("조건에 맞는 띠부씰이 없어요","검색어나 필터를 바꿔서 다시 확인해보세요.");return}g.innerHTML=t.map(lt).join("")}function lt(t){const n=m(t.order),o=n.owned?" is-owned":"",i=n.duplicateCount>0?" has-duplicate":"",r=n.damagedCount>0?" has-damage":"",a=n.owned?"checked":"",d=ut(n);return`
    <article class="sticker-card${o}${i}${r}">
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
          <span class="sticker-card__meta">#${ht(t.order)} · 도감 ${t.dexNo}</span>
          <h2>${t.name}</h2>
          ${d}
        </div>

        <div class="status-toggles" aria-label="${t.name} 상태 표시">
          <label class="status-toggle status-toggle--owned">
            <span>보관</span>
            <input type="checkbox" data-order="${t.order}" data-status="owned" ${a} />
          </label>
          ${y(t,"duplicateCount","중복",n.duplicateCount)}
          ${y(t,"damagedCount","하자",n.damagedCount)}
        </div>
      </div>
    </article>
  `}function y(t,n,o,i){const r=i===0?"disabled":"";return`
    <div class="count-row count-row--${n}">
      <div class="count-row__label">
        <span>${o}</span>
        <span aria-hidden="true">|</span>
        <output>${h(i)}</output>
      </div>
      <div class="count-stepper" aria-label="${t.name} ${o} 개수 조절">
        <button
          type="button"
          data-order="${t.order}"
          data-count-status="${n}"
          data-step="-1"
          aria-label="${t.name} ${o} 1개 줄이기"
          ${r}
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
  `}function ut(t){const n=k(t),o=[t.owned?{className:"status-badge--owned",label:"보관"}:void 0,n>0?{className:"status-badge--total",label:`총 ${h(n)}`}:void 0,t.duplicateCount>0?{className:"status-badge--duplicate",label:`중복 ${h(t.duplicateCount)}`}:void 0,t.damagedCount>0?{className:"status-badge--damaged",label:`하자 ${h(t.damagedCount)}`}:void 0].filter(i=>i!==void 0);return o.length===0?"":`
    <div class="sticker-card__badges" aria-label="표시된 상태">
      ${o.map(i=>`<span class="${i.className}">${i.label}</span>`).join("")}
    </div>
  `}function T(t,n){return`
    <div class="empty-state">
      <h2>${t}</h2>
      <p>${n}</p>
    </div>
  `}function ft(){const t=c.searchTerm.trim().toLowerCase();return O().filter(n=>{const o=m(n.order),i=n.name.toLowerCase().includes(t)||String(n.order).includes(t)||String(n.dexNo).includes(t),r=c.filterMode==="all"||c.filterMode==="owned"&&o.owned||c.filterMode==="missing"&&!o.owned||c.filterMode==="duplicate"&&o.duplicateCount>0||c.filterMode==="damaged"&&o.damagedCount>0;return i&&r})}function C(){return p(c.selectedSeriesId)??p(E)??w[0]}function O(){return C().stickers}function B(){const t=c.collectionBySeries[c.selectedSeriesId]??{};return c.collectionBySeries[c.selectedSeriesId]=t,t}function mt(t){const n=c.collectionBySeries[t.id]??{},o=t.stickers.filter(r=>{var a;return((a=n[r.order])==null?void 0:a.owned)===!0}).length,i=t.stickers.reduce((r,a)=>r+k(n[a.order]??A()),0);return{ownedCount:o,totalCount:i}}function p(t){return w.find(n=>n.id===t)}function gt(t){return m(t).owned}function m(t){return B()[t]??A()}function x(t,n){const o={owned:n.owned||n.duplicateCount>0||n.damagedCount>0,duplicateCount:S(n.duplicateCount),damagedCount:S(n.damagedCount)},i=B();if(!o.owned){delete i[t];return}i[t]=o}function A(){return{owned:!1,duplicateCount:0,damagedCount:0}}function k(t){return(t.owned?1:0)+t.duplicateCount+t.damagedCount}function h(t){return`${t}개`}function pt(t){return t==="official"?"공식 확인":t==="checked"?"교차 확인":"검증 중"}function S(t){return Number.isFinite(t)?Math.min(Math.max(Math.trunc(t),0),F):0}function ht(t){return String(t).padStart(2,"0")}function St(t){return t==="all"||t==="owned"||t==="missing"||t==="duplicate"||t==="damaged"}function wt(t){return t==="duplicateCount"||t==="damagedCount"}function Ct(){const t=window.localStorage.getItem(M);return t&&p(t)?t:E}function H(){return window.location.hash==="#collection"?"collection":"home"}function j(t){c.viewMode=t,window.history.replaceState(null,"",t==="collection"?"#collection":window.location.pathname+window.location.search),window.scrollTo({top:0,behavior:"smooth"})}function $t(){const t=window.localStorage.getItem(L);if(t)try{return bt(JSON.parse(t))}catch{return{}}const n=window.localStorage.getItem(P);if(!n)return{};try{const o=V(JSON.parse(n));return Object.keys(o).length>0?{[E]:o}:{}}catch{return{}}}function v(t){window.localStorage.setItem(L,JSON.stringify(t))}function bt(t){if(!b(t))return{};const n={};for(const[o,i]of Object.entries(t)){if(!p(o))continue;const r=V(i);Object.keys(r).length>0&&(n[o]=r)}return n}function V(t){if(!b(t))return{};const n={};for(const[o,i]of Object.entries(t)){const r=Number(o);if(!Number.isInteger(r))continue;if(typeof i=="boolean"){i&&(n[r]={owned:!0,duplicateCount:0,damagedCount:0});continue}if(!b(i))continue;const a=N(i.duplicateCount??i.duplicate),d=N(i.damagedCount??i.damaged),l={owned:i.owned===!0||a>0||d>0,duplicateCount:a,damagedCount:d};l.owned&&(n[r]=l)}return n}function N(t){return typeof t=="number"?S(t):t===!0?1:0}function b(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function s(t){const n=document.querySelector(t);if(!n)throw new Error(`필수 화면 요소를 찾지 못했습니다: ${t}`);return n}
