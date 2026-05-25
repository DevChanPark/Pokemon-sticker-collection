(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const N=e=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`,t=(e,n,o)=>({order:e,dexNo:n,name:o,imageUrl:N(n)}),f=[t(1,1,"이상해씨"),t(2,2,"이상해풀"),t(3,3,"이상해꽃"),t(4,4,"파이리"),t(5,5,"리자드"),t(6,6,"리자몽"),t(7,7,"꼬부기"),t(8,8,"어니부기"),t(9,9,"거북왕"),t(10,10,"캐터피"),t(11,11,"단데기"),t(12,12,"버터플"),t(13,13,"뿔충이"),t(14,14,"딱충이"),t(15,15,"독침붕"),t(16,16,"구구"),t(17,17,"피죤"),t(18,18,"피죤투"),t(19,19,"꼬렛"),t(20,20,"레트라"),t(21,23,"아보"),t(22,24,"아보크"),t(23,25,"피카츄"),t(24,26,"라이츄"),t(25,37,"식스테일"),t(26,38,"나인테일"),t(27,39,"푸린"),t(28,40,"푸크린"),t(29,41,"주뱃"),t(30,42,"골뱃"),t(31,52,"나옹"),t(32,53,"페르시온"),t(33,54,"고라파덕"),t(34,55,"골덕"),t(35,56,"망키"),t(36,57,"성원숭"),t(37,58,"가디"),t(38,59,"윈디"),t(39,63,"캐이시"),t(40,64,"윤겔라"),t(41,65,"후딘"),t(42,66,"알통몬"),t(43,67,"근육몬"),t(44,68,"괴력몬"),t(45,69,"모다피"),t(46,70,"우츠동"),t(47,71,"우츠보트"),t(48,74,"꼬마돌"),t(49,75,"데구리"),t(50,76,"딱구리"),t(51,77,"포니타"),t(52,78,"날쌩마"),t(53,79,"야돈"),t(54,80,"야도란"),t(55,81,"코일"),t(56,82,"레어코일"),t(57,83,"파오리"),t(58,84,"두두"),t(59,85,"두트리오"),t(60,88,"질퍽이"),t(61,89,"질뻐기"),t(62,92,"고오스"),t(63,93,"고우스트"),t(64,94,"팬텀"),t(65,95,"롱스톤"),t(66,100,"찌리리공"),t(67,101,"붐볼"),t(68,104,"탕구리"),t(69,105,"텅구리"),t(70,109,"또가스"),t(71,110,"또도가스"),t(72,111,"뿔카노"),t(73,112,"코뿌리"),t(74,113,"럭키"),t(75,114,"덩쿠리"),t(76,120,"별가사리"),t(77,121,"아쿠스타"),t(78,123,"스라크"),t(79,125,"에레브"),t(80,126,"마그마"),t(81,127,"쁘사이저"),t(82,128,"켄타로스"),t(83,129,"잉어킹"),t(84,130,"갸라도스"),t(85,131,"라프라스"),t(86,132,"메타몽"),t(87,133,"이브이"),t(88,134,"샤미드"),t(89,135,"쥬피썬더"),t(90,136,"부스터"),t(91,137,"폴리곤"),t(92,142,"프테라"),t(93,143,"잠만보"),t(94,144,"프리져"),t(95,145,"썬더"),t(96,146,"파이어"),t(97,147,"미뇽"),t(98,148,"신뇽"),t(99,149,"망나뇽"),t(100,150,"뮤츠")],O="since-1996-pokemon-sticker-collection",M=99,d={statusByOrder:K(),searchTerm:"",filterMode:"all"},w=u("#collection-grid"),h=u("#search-input"),L=u("#owned-count"),_=u("#duplicate-count"),B=u("#damaged-count"),T=u("#progress-bar"),A=u("#clear-button"),E=document.querySelectorAll("[data-filter]");l();h.addEventListener("input",()=>{d.searchTerm=h.value,l()});E.forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.filter;z(n)&&(d.filterMode=n,l())})});A.addEventListener("click",()=>{d.statusByOrder={},b(d.statusByOrder),l()});w.addEventListener("change",e=>{const n=e.target;if(!(n instanceof HTMLInputElement))return;const o=n.dataset.order,s=n.dataset.status;if(!o||s!=="owned")return;const r=Number(o),a={...i(r),owned:n.checked};n.checked||(a.duplicateCount=0,a.damagedCount=0),v(r,a),b(d.statusByOrder),l()});w.addEventListener("click",e=>{const n=e.target;if(!(n instanceof Element))return;const o=n.closest("[data-count-status][data-step][data-order]");if(!(o instanceof HTMLButtonElement))return;const s=o.dataset.order,r=o.dataset.countStatus,a=Number(o.dataset.step);if(!s||!H(r)||!Number.isInteger(a))return;const c=Number(s),m=i(c),p={...m,[r]:g(m[r]+a)};(p.duplicateCount>0||p.damagedCount>0)&&(p.owned=!0),v(c,p),b(d.statusByOrder),l()});function l(){x(),k(),I(U())}function x(){const e=f.filter(r=>j(r.order)).length,n=f.reduce((r,a)=>r+i(a.order).duplicateCount,0),o=f.reduce((r,a)=>r+i(a.order).damagedCount,0),s=Math.round(e/f.length*100);L.textContent=String(e),_.textContent=String(n),B.textContent=String(o),T.style.width=`${s}%`}function k(){E.forEach(e=>{const n=e.dataset.filter===d.filterMode;e.classList.toggle("is-active",n),e.setAttribute("aria-pressed",String(n))})}function I(e){w.innerHTML=e.map(P).join("")}function P(e){const n=i(e.order),o=n.owned?" is-owned":"",s=n.duplicateCount>0?" has-duplicate":"",r=n.damagedCount>0?" has-damage":"",a=n.owned?"checked":"",c=F(n);return`
    <article class="sticker-card${o}${s}${r}">
      <div class="sticker-card__image-wrap">
        <img
          class="sticker-card__image"
          src="${e.imageUrl}"
          alt="${e.name} 띠부씰 이미지"
          loading="lazy"
        />
      </div>

      <div class="sticker-card__body">
        <div>
          <span class="sticker-card__meta">#${V(e.order)} · 도감 ${e.dexNo}</span>
          <h2>${e.name}</h2>
          ${c}
        </div>

        <div class="status-toggles" aria-label="${e.name} 상태 표시">
          <label class="status-toggle status-toggle--owned">
            <span>보관</span>
            <input type="checkbox" data-order="${e.order}" data-status="owned" ${a} />
          </label>
          ${$(e,"duplicateCount","중복",n.duplicateCount)}
          ${$(e,"damagedCount","하자",n.damagedCount)}
        </div>
      </div>
    </article>
  `}function $(e,n,o,s){const r=s===0?"disabled":"";return`
    <div class="count-row count-row--${n}">
      <div class="count-row__label">
        <span>${o}</span>
        <span aria-hidden="true">|</span>
        <output>${C(s)}</output>
      </div>
      <div class="count-stepper" aria-label="${e.name} ${o} 개수 조절">
        <button
          type="button"
          data-order="${e.order}"
          data-count-status="${n}"
          data-step="-1"
          aria-label="${e.name} ${o} 1개 줄이기"
          ${r}
        >-</button>
        <output aria-label="${e.name} ${o} 개수">${s}</output>
        <button
          type="button"
          data-order="${e.order}"
          data-count-status="${n}"
          data-step="1"
          aria-label="${e.name} ${o} 1개 늘리기"
        >+</button>
      </div>
    </div>
  `}function F(e){const n=[e.owned?{className:"status-badge--owned",label:"보관"}:void 0,e.duplicateCount>0?{className:"status-badge--duplicate",label:`중복 ${C(e.duplicateCount)}`}:void 0,e.damagedCount>0?{className:"status-badge--damaged",label:`하자 ${C(e.damagedCount)}`}:void 0].filter(o=>o!==void 0);return n.length===0?"":`
    <div class="sticker-card__badges" aria-label="표시된 상태">
      ${n.map(o=>`<span class="${o.className}">${o.label}</span>`).join("")}
    </div>
  `}function U(){const e=d.searchTerm.trim().toLowerCase();return f.filter(n=>{const o=i(n.order),s=n.name.toLowerCase().includes(e)||String(n.order).includes(e)||String(n.dexNo).includes(e),r=d.filterMode==="all"||d.filterMode==="owned"&&o.owned||d.filterMode==="missing"&&!o.owned||d.filterMode==="duplicate"&&o.duplicateCount>0||d.filterMode==="damaged"&&o.damagedCount>0;return s&&r})}function j(e){return i(e).owned}function i(e){return d.statusByOrder[e]??q()}function v(e,n){const o={owned:n.owned||n.duplicateCount>0||n.damagedCount>0,duplicateCount:g(n.duplicateCount),damagedCount:g(n.damagedCount)};if(!o.owned){delete d.statusByOrder[e];return}d.statusByOrder[e]=o}function q(){return{owned:!1,duplicateCount:0,damagedCount:0}}function C(e){return`${e}개`}function g(e){return Number.isFinite(e)?Math.min(Math.max(Math.trunc(e),0),M):0}function V(e){return String(e).padStart(2,"0")}function z(e){return e==="all"||e==="owned"||e==="missing"||e==="duplicate"||e==="damaged"}function H(e){return e==="duplicateCount"||e==="damagedCount"}function K(){const e=window.localStorage.getItem(O);if(!e)return{};try{const n=JSON.parse(e);return G(n)}catch{return{}}}function b(e){window.localStorage.setItem(O,JSON.stringify(e))}function G(e){if(!y(e))return{};const n={};for(const[o,s]of Object.entries(e)){const r=Number(o);if(!Number.isInteger(r))continue;if(typeof s=="boolean"){s&&(n[r]={owned:!0,duplicateCount:0,damagedCount:0});continue}if(!y(s))continue;const a=S(s.duplicateCount??s.duplicate),c=S(s.damagedCount??s.damaged),m={owned:s.owned===!0||a>0||c>0,duplicateCount:a,damagedCount:c};m.owned&&(n[r]=m)}return n}function S(e){return typeof e=="number"?g(e):e===!0?1:0}function y(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function u(e){const n=document.querySelector(e);if(!n)throw new Error(`필수 화면 요소를 찾지 못했습니다: ${e}`);return n}
