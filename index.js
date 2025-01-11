import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(i){return fetch(`https://pixabay.com/api/?key=48149972-37b948820d674e189867b2eae&q=${i}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function d(i){return i.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:l,downloads:n})=>`<li class="cat-card">
        <div class="gallery"><a href="${t}"><img src="${o}" alt="${s}"></a></div>
        <ul class="cat-info">
            <li class="info-desk">
            <h1>Likes</h1>
            <p>${e}</p>
            </li> 
            <li class="info-desk">
            <h1>Views</h1>
            <p>${r}</p>
            </li>
            <li class="info-desk">
            <h1>Comments</h1>
            <p>${l}</p>
            </li>
            <li class="info-desk">
            <h1>Downloads</h1>
            <p>${n}</p>
            </li>
        </ul>
        </li>`).join("")}const a={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};a.form.addEventListener("submit",h);function h(i){i.preventDefault(),a.gallery.innerHTML="";const o=i.currentTarget.elements[0].value.trim();this.reset(),a.loader.classList.remove("hidden"),f(o).then(t=>{if(t.total<1)c.show({message:"🚫 Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,backgroundColor:"red",messageColor:"white",progressBar:!1});else return a.gallery.innerHTML=d(t.hits)}).then(()=>p.refresh()).catch(t=>console.log(t)).finally(()=>a.loader.classList.add("hidden"))}let p=new u(".gallery a",{captionsData:"alt",captionDelay:250,history:!1});
//# sourceMappingURL=index.js.map
