import{a as p,S as u,i as a}from"./assets/vendor-67BWzQEt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="11370735-3d6e0314cf2e59c2293396bf4",y="https://pixabay.com/api/";function g(i){return p.get(y,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const f=document.querySelector(".gallery");let s=new u(".gallery a");function h(i){const o=i.map(r=>`
    <li class="gallery__item">
      <a href="${r.largeImageURL}" class="gallery__link">
        <img src="${r.webformatURL}" alt="${r.tags}" class="gallery__image" />
      </a>
      <div class="gallery__info">
        <p class="gallery__info-item"><b>Likes</b> ${r.likes}</p>
        <p class="gallery__info-item"><b>Views</b> ${r.views}</p>
        <p class="gallery__info-item"><b>Comments</b> ${r.comments}</p>
        <p class="gallery__info-item"><b>Downloads</b> ${r.downloads}</p>
      </div>
    </li>
  `).join("");f.innerHTML=o,s.refresh(),s?s.refresh():s=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){f.innerHTML=""}function _(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function c(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}const d=document.querySelector(".form"),L=d.querySelector('input[name="search-text"]');d.addEventListener("submit",function(i){i.preventDefault();const o=L.value.trim();if(!o){a.error({title:"Error",message:"Введіть пошуковий запит!",position:"topRight"});return}b(),_(),g(o).then(r=>{if(c(),r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(r.hits)}).catch(r=>{c(),a.error({title:"Error",message:"Щось пішло не так. Спробуйте пізніше.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
