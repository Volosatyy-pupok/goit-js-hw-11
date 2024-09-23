import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const m="46141874-6e703aba01419e220f8d650c5",d="https://pixabay.com/api/",p=o=>fetch(`${d}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(`Error fetching images: ${e.status} ${e.statusText}`);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found for this query.");return e.hits}),y=o=>{const e=document.querySelector(".gallery");if(e.innerHTML="",o.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=o.map(({webformatURL:i,largeImageURL:r,tags:t,likes:n,views:a,comments:l,downloads:c})=>`
            <li class="gallery-item">
                <a href="${r}" class="gallery-link">
                    <img src="${i}" alt="${t}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${n}</p>
                    <p class="info-item"><span>Views</span> ${a}</p>
                    <p class="info-item"><span>Comments</span> ${l}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join("");e.innerHTML=s},h=()=>{const o=document.querySelector(".loader");o.style.display="block"},g=()=>{const o=document.querySelector(".loader");o.style.display="none"},L=document.querySelector(".search-form"),$=document.querySelector(".gallery"),q=new f(".gallery a");L.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.query.value.trim();e&&($.innerHTML="",h(),p(e).then(s=>{y(s),q.refresh()}).catch(s=>{console.error(s),iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
