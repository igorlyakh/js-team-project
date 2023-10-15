/* empty css             */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/SupportUkraine/01-found-1.png",img2:"./img/SupportUkraine/01-found-2.png",width:154,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/SupportUkraine/02-found-1.png",img2:"./img/SupportUkraine/02-found-2.png",width:71,height:32},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/SupportUkraine/03-found-1.png",img2:"./img/SupportUkraine/03-found-2.png",width:219,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/SupportUkraine/04-found-1.png",img2:"./img/SupportUkraine/04-found-2.png",width:136,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/SupportUkraine/05-found-1.png",img2:"./img/SupportUkraine/05-found-2.png",width:76,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/SupportUkraine/06-found-1.png",img2:"./img/SupportUkraine/06-found-2.png",width:96,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/SupportUkraine/07-found-1.png",img2:"./img/SupportUkraine/07-found-2.png",width:57,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/SupportUkraine/08-found-1.png",img2:"./img/SupportUkraine/08-found-2.png",width:106,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/SupportUkraine/09-found-1.png",img2:"./img/SupportUkraine/09-found-2.png",width:180,height:32}],b=document.querySelector(".logoContainer");function v(){const o=y.map(({title:n,url:i,img:r,img2:e,width:t,height:l},c)=>`<div class="logo__item fund-item"><p class="fundNumber">${(c+1).toString().padStart(2,"0")}</p>
        <a href="${i}" class="logo__img"  target="_blank" crossorigin="anonymous"  rel="noopener noreferrer nofollow" aria-label="${n}" >
        <picture>
        <source srcset="${r}, ${e} 2x" />
        <img src="${r}" alt="${n}" loading="lazy" width="${t}" height="${l}">
      </picture>
        </a></div>
        
    `).join("");b.insertAdjacentHTML("beforeend",o)}v();const L=document.querySelector(".swiper-container"),d=document.querySelector(".logoContainer"),U=document.querySelector(".logo__item"),$=document.querySelector(".swiper-button-next"),p=document.querySelector(".swiper-button-next__icon");let a=1;const f=100;let g=Math.ceil((U.clientHeight*d.children.length+20*(d.children.length-1)-L.clientHeight)/f);$.addEventListener("click",E);function E(){a<=g?(a===g&&(p.style.transform="rotate(180deg)"),d.style.transform=`translateY(${-f*a}px)`,++a):(a=1,d.style.transform="",p.style.transform="")}(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector(".close-modal"),backdrop:document.querySelector("[data-modal-backdrop]"),modal:document.querySelector(".modal")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",i),o.backdrop.addEventListener("click",i);function n(){o.modal.classList.remove("is-hidden"),o.backdrop.classList.remove("is-hidden")}function i(){o.modal.classList.add("is-hidden"),o.backdrop.classList.add("is-hidden")}})();const m=document.querySelector(".shoplist-list"),h=document.querySelector(".shoplist-inside"),k="users-book",s=JSON.parse(localStorage.getItem(k));function w(o){const n=o.map(({book_image:i,title:r,title_name:e,description:t,author:l,buy_link:c,buy_links:u,_id:S})=>`<li class="shopingList-item" data-id="${S}">
                <button type="button" class="deleted-button">
                    <svg class="deleted-button-icon" width="16" height="16">
                        <use href="./"></use>
                    </svg>
                </button> 

                <div class="books-img">
                    ${i}
                </div>

                <div class="info-list">
                    <h2 class="title-book">${r}</h2>
                    <p class="title-names">${e}</p>
                    <p class="description js-description">${t}</p>
                    <p class="book-author">${l}</p>

                    <div class="book-link">
                        <a class="amazon-icon" href="${c}" target="_blank" rel="noopener noreferrer nofollow">
                            <img class="amazon-logo" src="../" alt="amazon" loading="lazy"/>            
                        </a>
                        <a class="apple-icon" href="${u}" target="_blank" rel="noopener noreferrer nofollow">
                            <img class="apple-logo" src="../" alt="apple" loading="lazy"/>            
                        </a>
                    </div>
                </div>
            </li>`).join("");s.length!==0?(h.hidden=!0,m.innerHTML=n,document.querySelectorAll(".deleted-button").forEach(r=>{r.addEventListener("click",M)})):(h.hidden=!1,m.innerHTML="  ")}w(s);function M(o){const n=o.target.closest(".shopingList-item").dataset.id,i=s.findIndex(r=>r._id===n);i!==-1?(s.splice(i,1),localStorage.setItem(k,JSON.stringify(s)),w(s)):console.error("Книга не знайдена")}
