(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const $=t=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${t}.png`,e=(t,r,s)=>({order:t,dexNo:r,name:s,imageUrl:$(r)}),u=[e(1,1,"이상해씨"),e(2,2,"이상해풀"),e(3,3,"이상해꽃"),e(4,4,"파이리"),e(5,5,"리자드"),e(6,6,"리자몽"),e(7,7,"꼬부기"),e(8,8,"어니부기"),e(9,9,"거북왕"),e(10,10,"캐터피"),e(11,11,"단데기"),e(12,12,"버터플"),e(13,13,"뿔충이"),e(14,14,"딱충이"),e(15,15,"독침붕"),e(16,16,"구구"),e(17,17,"피죤"),e(18,18,"피죤투"),e(19,19,"꼬렛"),e(20,20,"레트라"),e(21,23,"아보"),e(22,24,"아보크"),e(23,25,"피카츄"),e(24,26,"라이츄"),e(25,37,"식스테일"),e(26,38,"나인테일"),e(27,39,"푸린"),e(28,40,"푸크린"),e(29,41,"주뱃"),e(30,42,"골뱃"),e(31,52,"나옹"),e(32,53,"페르시온"),e(33,54,"고라파덕"),e(34,55,"골덕"),e(35,56,"망키"),e(36,57,"성원숭"),e(37,58,"가디"),e(38,59,"윈디"),e(39,63,"캐이시"),e(40,64,"윤겔라"),e(41,65,"후딘"),e(42,66,"알통몬"),e(43,67,"근육몬"),e(44,68,"괴력몬"),e(45,69,"모다피"),e(46,70,"우츠동"),e(47,71,"우츠보트"),e(48,74,"꼬마돌"),e(49,75,"데구리"),e(50,76,"딱구리"),e(51,77,"포니타"),e(52,78,"날쌩마"),e(53,79,"야돈"),e(54,80,"야도란"),e(55,81,"코일"),e(56,82,"레어코일"),e(57,83,"파오리"),e(58,84,"두두"),e(59,85,"두트리오"),e(60,88,"질퍽이"),e(61,89,"질뻐기"),e(62,92,"고오스"),e(63,93,"고우스트"),e(64,94,"팬텀"),e(65,95,"롱스톤"),e(66,100,"찌리리공"),e(67,101,"붐볼"),e(68,104,"탕구리"),e(69,105,"텅구리"),e(70,109,"또가스"),e(71,110,"또도가스"),e(72,111,"뿔카노"),e(73,112,"코뿌리"),e(74,113,"럭키"),e(75,114,"덩쿠리"),e(76,120,"별가사리"),e(77,121,"아쿠스타"),e(78,123,"스라크"),e(79,125,"에레브"),e(80,126,"마그마"),e(81,127,"쁘사이저"),e(82,128,"켄타로스"),e(83,129,"잉어킹"),e(84,130,"갸라도스"),e(85,131,"라프라스"),e(86,132,"메타몽"),e(87,133,"이브이"),e(88,134,"샤미드"),e(89,135,"쥬피썬더"),e(90,136,"부스터"),e(91,137,"폴리곤"),e(92,142,"프테라"),e(93,143,"잠만보"),e(94,144,"프리져"),e(95,145,"썬더"),e(96,146,"파이어"),e(97,147,"미뇽"),e(98,148,"신뇽"),e(99,149,"망나뇽"),e(100,150,"뮤츠")],p="since-1996-pokemon-sticker-collection",d={statusByOrder:q(),searchTerm:"",filterMode:"all"},h=c("#collection-grid"),g=c("#search-input"),C=c("#owned-count"),O=c("#duplicate-count"),k=c("#damaged-count"),E=c("#progress-bar"),v=c("#clear-button"),w=document.querySelectorAll("[data-filter]");f();g.addEventListener("input",()=>{d.searchTerm=g.value,f()});w.forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.filter;F(r)&&(d.filterMode=r,f())})});v.addEventListener("click",()=>{d.statusByOrder={},y(d.statusByOrder),f()});h.addEventListener("change",t=>{const r=t.target;if(!(r instanceof HTMLInputElement))return;const s=r.dataset.order,o=r.dataset.status;if(!s||!j(o))return;const a=Number(s),n={...i(a),[o]:r.checked};o==="owned"&&!r.checked&&(n.duplicate=!1,n.damaged=!1),(o==="duplicate"||o==="damaged")&&r.checked&&(n.owned=!0),T(a,n),y(d.statusByOrder),f()});function f(){L(),N(),M(_())}function L(){const t=u.filter(a=>A(a.order)).length,r=u.filter(a=>i(a.order).duplicate).length,s=u.filter(a=>i(a.order).damaged).length,o=Math.round(t/u.length*100);C.textContent=String(t),O.textContent=String(r),k.textContent=String(s),E.style.width=`${o}%`}function N(){w.forEach(t=>{const r=t.dataset.filter===d.filterMode;t.classList.toggle("is-active",r),t.setAttribute("aria-pressed",String(r))})}function M(t){h.innerHTML=t.map(x).join("")}function x(t){const r=i(t.order),s=r.owned?" is-owned":"",o=r.duplicate?" has-duplicate":"",a=r.damaged?" has-damage":"",n=r.owned?"checked":"",l=r.duplicate?"checked":"",b=r.damaged?"checked":"",S=B(r);return`
    <article class="sticker-card${s}${o}${a}">
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
          <span class="sticker-card__meta">#${P(t.order)} · 도감 ${t.dexNo}</span>
          <h2>${t.name}</h2>
          ${S}
        </div>

        <div class="status-toggles" aria-label="${t.name} 상태 표시">
          <label class="status-toggle status-toggle--owned">
            <span>보관</span>
            <input type="checkbox" data-order="${t.order}" data-status="owned" ${n} />
          </label>
          <label class="status-toggle status-toggle--duplicate">
            <span>중복</span>
            <input type="checkbox" data-order="${t.order}" data-status="duplicate" ${l} />
          </label>
          <label class="status-toggle status-toggle--damaged">
            <span>하자</span>
            <input type="checkbox" data-order="${t.order}" data-status="damaged" ${b} />
          </label>
        </div>
      </div>
    </article>
  `}function B(t){const r=[t.owned?{className:"status-badge--owned",label:"보관"}:void 0,t.duplicate?{className:"status-badge--duplicate",label:"중복"}:void 0,t.damaged?{className:"status-badge--damaged",label:"하자"}:void 0].filter(s=>s!==void 0);return r.length===0?"":`
    <div class="sticker-card__badges" aria-label="표시된 상태">
      ${r.map(s=>`<span class="${s.className}">${s.label}</span>`).join("")}
    </div>
  `}function _(){const t=d.searchTerm.trim().toLowerCase();return u.filter(r=>{const s=i(r.order),o=r.name.toLowerCase().includes(t)||String(r.order).includes(t)||String(r.dexNo).includes(t),a=d.filterMode==="all"||d.filterMode==="owned"&&s.owned||d.filterMode==="missing"&&!s.owned||d.filterMode==="duplicate"&&s.duplicate||d.filterMode==="damaged"&&s.damaged;return o&&a})}function A(t){return i(t).owned}function i(t){return d.statusByOrder[t]??I()}function T(t,r){if(!r.owned){delete d.statusByOrder[t];return}d.statusByOrder[t]=r}function I(){return{owned:!1,duplicate:!1,damaged:!1}}function P(t){return String(t).padStart(2,"0")}function F(t){return t==="all"||t==="owned"||t==="missing"||t==="duplicate"||t==="damaged"}function j(t){return t==="owned"||t==="duplicate"||t==="damaged"}function q(){const t=window.localStorage.getItem(p);if(!t)return{};try{const r=JSON.parse(t);return K(r)}catch{return{}}}function y(t){window.localStorage.setItem(p,JSON.stringify(t))}function K(t){if(!m(t))return{};const r={};for(const[s,o]of Object.entries(t)){const a=Number(s);if(!Number.isInteger(a))continue;if(typeof o=="boolean"){o&&(r[a]={owned:!0,duplicate:!1,damaged:!1});continue}if(!m(o))continue;const n={owned:o.owned===!0,duplicate:o.duplicate===!0,damaged:o.damaged===!0};(n.duplicate||n.damaged)&&(n.owned=!0),n.owned&&(r[a]=n)}return r}function m(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function c(t){const r=document.querySelector(t);if(!r)throw new Error(`필수 화면 요소를 찾지 못했습니다: ${t}`);return r}
