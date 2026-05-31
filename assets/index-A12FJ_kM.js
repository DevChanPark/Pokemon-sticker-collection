(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const M=e=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`,t=(e,n,r)=>({order:e,dexNo:n,name:r,imageUrl:M(n)}),l=[t(1,1,"이상해씨"),t(2,2,"이상해풀"),t(3,3,"이상해꽃"),t(4,4,"파이리"),t(5,5,"리자드"),t(6,6,"리자몽"),t(7,7,"꼬부기"),t(8,8,"어니부기"),t(9,9,"거북왕"),t(10,10,"캐터피"),t(11,11,"단데기"),t(12,12,"버터플"),t(13,13,"뿔충이"),t(14,14,"딱충이"),t(15,15,"독침붕"),t(16,16,"구구"),t(17,17,"피죤"),t(18,18,"피죤투"),t(19,19,"꼬렛"),t(20,20,"레트라"),t(21,23,"아보"),t(22,24,"아보크"),t(23,25,"피카츄"),t(24,26,"라이츄"),t(25,37,"식스테일"),t(26,38,"나인테일"),t(27,39,"푸린"),t(28,40,"푸크린"),t(29,41,"주뱃"),t(30,42,"골뱃"),t(31,52,"나옹"),t(32,53,"페르시온"),t(33,54,"고라파덕"),t(34,55,"골덕"),t(35,56,"망키"),t(36,57,"성원숭"),t(37,58,"가디"),t(38,59,"윈디"),t(39,63,"캐이시"),t(40,64,"윤겔라"),t(41,65,"후딘"),t(42,66,"알통몬"),t(43,67,"근육몬"),t(44,68,"괴력몬"),t(45,69,"모다피"),t(46,70,"우츠동"),t(47,71,"우츠보트"),t(48,74,"꼬마돌"),t(49,75,"데구리"),t(50,76,"딱구리"),t(51,77,"포니타"),t(52,78,"날쌩마"),t(53,79,"야돈"),t(54,80,"야도란"),t(55,81,"코일"),t(56,82,"레어코일"),t(57,83,"파오리"),t(58,84,"두두"),t(59,85,"두트리오"),t(60,88,"질퍽이"),t(61,89,"질뻐기"),t(62,92,"고오스"),t(63,93,"고우스트"),t(64,94,"팬텀"),t(65,95,"롱스톤"),t(66,100,"찌리리공"),t(67,101,"붐볼"),t(68,104,"탕구리"),t(69,105,"텅구리"),t(70,109,"또가스"),t(71,110,"또도가스"),t(72,111,"뿔카노"),t(73,112,"코뿌리"),t(74,113,"럭키"),t(75,114,"덩쿠리"),t(76,120,"별가사리"),t(77,121,"아쿠스타"),t(78,123,"스라크"),t(79,125,"에레브"),t(80,126,"마그마"),t(81,127,"쁘사이저"),t(82,128,"켄타로스"),t(83,129,"잉어킹"),t(84,130,"갸라도스"),t(85,131,"라프라스"),t(86,132,"메타몽"),t(87,133,"이브이"),t(88,134,"샤미드"),t(89,135,"쥬피썬더"),t(90,136,"부스터"),t(91,137,"폴리곤"),t(92,142,"프테라"),t(93,143,"잠만보"),t(94,144,"프리져"),t(95,145,"썬더"),t(96,146,"파이어"),t(97,147,"미뇽"),t(98,148,"신뇽"),t(99,149,"망나뇽"),t(100,150,"뮤츠")],E="since-1996-pokemon-sticker-collection",L=99,c={statusByOrder:J(),searchTerm:"",filterMode:"all"},w=u("#collection-grid"),h=u("#search-input"),T=u("#owned-count"),_=u("#total-count"),B=u("#duplicate-count"),x=u("#damaged-count"),A=u("#progress-bar"),k=u("#clear-button"),O=document.querySelectorAll("[data-filter]");m();h.addEventListener("input",()=>{c.searchTerm=h.value,m()});O.forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.filter;K(n)&&(c.filterMode=n,m())})});k.addEventListener("click",()=>{c.statusByOrder={},b(c.statusByOrder),m()});w.addEventListener("change",e=>{const n=e.target;if(!(n instanceof HTMLInputElement))return;const r=n.dataset.order,d=n.dataset.status;if(!r||d!=="owned")return;const o=Number(r),a={...i(o),owned:n.checked};n.checked||(a.duplicateCount=0,a.damagedCount=0),v(o,a),b(c.statusByOrder),m()});w.addEventListener("click",e=>{const n=e.target;if(!(n instanceof Element))return;const r=n.closest("[data-count-status][data-step][data-order]");if(!(r instanceof HTMLButtonElement))return;const d=r.dataset.order,o=r.dataset.countStatus,a=Number(r.dataset.step);if(!d||!G(o)||!Number.isInteger(a))return;const s=Number(d),f=i(s),p={...f,[o]:C(f[o]+a)};(p.duplicateCount>0||p.damagedCount>0)&&(p.owned=!0),v(s,p),b(c.statusByOrder),m()});function m(){I(),P(),F(q())}function I(){const e=l.filter(a=>V(a.order)).length,n=l.reduce((a,s)=>a+i(s.order).duplicateCount,0),r=l.reduce((a,s)=>a+i(s.order).damagedCount,0),d=l.reduce((a,s)=>a+N(i(s.order)),0),o=Math.round(e/l.length*100);T.textContent=String(e),_.textContent=String(d),B.textContent=String(n),x.textContent=String(r),A.style.width=`${o}%`}function P(){O.forEach(e=>{const n=e.dataset.filter===c.filterMode;e.classList.toggle("is-active",n),e.setAttribute("aria-pressed",String(n))})}function F(e){w.innerHTML=e.map(U).join("")}function U(e){const n=i(e.order),r=n.owned?" is-owned":"",d=n.duplicateCount>0?" has-duplicate":"",o=n.damagedCount>0?" has-damage":"",a=n.owned?"checked":"",s=j(n);return`
    <article class="sticker-card${r}${d}${o}">
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
          <span class="sticker-card__meta">#${H(e.order)} · 도감 ${e.dexNo}</span>
          <h2>${e.name}</h2>
          ${s}
        </div>

        <div class="status-toggles" aria-label="${e.name} 상태 표시">
          <label class="status-toggle status-toggle--owned">
            <span>보관</span>
            <input type="checkbox" data-order="${e.order}" data-status="owned" ${a} />
          </label>
          ${S(e,"duplicateCount","중복",n.duplicateCount)}
          ${S(e,"damagedCount","하자",n.damagedCount)}
        </div>
      </div>
    </article>
  `}function S(e,n,r,d){const o=d===0?"disabled":"";return`
    <div class="count-row count-row--${n}">
      <div class="count-row__label">
        <span>${r}</span>
        <span aria-hidden="true">|</span>
        <output>${g(d)}</output>
      </div>
      <div class="count-stepper" aria-label="${e.name} ${r} 개수 조절">
        <button
          type="button"
          data-order="${e.order}"
          data-count-status="${n}"
          data-step="-1"
          aria-label="${e.name} ${r} 1개 줄이기"
          ${o}
        >-</button>
        <button
          type="button"
          data-order="${e.order}"
          data-count-status="${n}"
          data-step="1"
          aria-label="${e.name} ${r} 1개 늘리기"
        >+</button>
      </div>
    </div>
  `}function j(e){const n=N(e),r=[e.owned?{className:"status-badge--owned",label:"보관"}:void 0,n>0?{className:"status-badge--total",label:`총 ${g(n)}`}:void 0,e.duplicateCount>0?{className:"status-badge--duplicate",label:`중복 ${g(e.duplicateCount)}`}:void 0,e.damagedCount>0?{className:"status-badge--damaged",label:`하자 ${g(e.damagedCount)}`}:void 0].filter(d=>d!==void 0);return r.length===0?"":`
    <div class="sticker-card__badges" aria-label="표시된 상태">
      ${r.map(d=>`<span class="${d.className}">${d.label}</span>`).join("")}
    </div>
  `}function q(){const e=c.searchTerm.trim().toLowerCase();return l.filter(n=>{const r=i(n.order),d=n.name.toLowerCase().includes(e)||String(n.order).includes(e)||String(n.dexNo).includes(e),o=c.filterMode==="all"||c.filterMode==="owned"&&r.owned||c.filterMode==="missing"&&!r.owned||c.filterMode==="duplicate"&&r.duplicateCount>0||c.filterMode==="damaged"&&r.damagedCount>0;return d&&o})}function V(e){return i(e).owned}function i(e){return c.statusByOrder[e]??z()}function v(e,n){const r={owned:n.owned||n.duplicateCount>0||n.damagedCount>0,duplicateCount:C(n.duplicateCount),damagedCount:C(n.damagedCount)};if(!r.owned){delete c.statusByOrder[e];return}c.statusByOrder[e]=r}function z(){return{owned:!1,duplicateCount:0,damagedCount:0}}function N(e){return(e.owned?1:0)+e.duplicateCount+e.damagedCount}function g(e){return`${e}개`}function C(e){return Number.isFinite(e)?Math.min(Math.max(Math.trunc(e),0),L):0}function H(e){return String(e).padStart(2,"0")}function K(e){return e==="all"||e==="owned"||e==="missing"||e==="duplicate"||e==="damaged"}function G(e){return e==="duplicateCount"||e==="damagedCount"}function J(){const e=window.localStorage.getItem(E);if(!e)return{};try{const n=JSON.parse(e);return R(n)}catch{return{}}}function b(e){window.localStorage.setItem(E,JSON.stringify(e))}function R(e){if(!y(e))return{};const n={};for(const[r,d]of Object.entries(e)){const o=Number(r);if(!Number.isInteger(o))continue;if(typeof d=="boolean"){d&&(n[o]={owned:!0,duplicateCount:0,damagedCount:0});continue}if(!y(d))continue;const a=$(d.duplicateCount??d.duplicate),s=$(d.damagedCount??d.damaged),f={owned:d.owned===!0||a>0||s>0,duplicateCount:a,damagedCount:s};f.owned&&(n[o]=f)}return n}function $(e){return typeof e=="number"?C(e):e===!0?1:0}function y(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function u(e){const n=document.querySelector(e);if(!n)throw new Error(`필수 화면 요소를 찾지 못했습니다: ${e}`);return n}
