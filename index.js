import{i as a,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="46141874-6e703aba01419e220f8d650c5",f="https://pixabay.com/api/",d=o=>fetch(`${f}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.json()).then(r=>r.hits.length===0?[]:r.hits).catch(()=>{throw a.error({title:"Error!",message:"Failed to fetch images!",position:"topRight"}),new Error("Fetch failed")}),h=o=>{const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:l,comments:c,downloads:u})=>`
            <li class="gallery-item">
                <a href="${e}" class="gallery-link">
                    <img src="${i}" alt="${t}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${n}</p>
                    <p class="info-item"><span>Views</span> ${l}</p>
                    <p class="info-item"><span>Comments</span> ${c}</p>
                    <p class="info-item"><span>Downloads</span> ${u}</p>
                </div>
            </li>
        `).join("");r.innerHTML=s},y=()=>{const o=document.querySelector(".loader");o.style.display="block"},g=()=>{const o=document.querySelector(".loader");o.style.display="none"},L=document.querySelector(".search-form"),q=document.querySelector(".gallery"),S=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});L.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.query.value.trim();r&&(q.innerHTML="",y(),d(r).then(s=>{if(s.length===0){a.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});return}h(s),S.refresh()}).catch(s=>{console.error(s),a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
