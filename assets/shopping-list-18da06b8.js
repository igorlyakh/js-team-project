(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/SupportUkraine/01-found-1.png",img2:"../img/SupportUkraine/01-found-2.png",width:154,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/SupportUkraine/02-found-1.png",img2:"../img/SupportUkraine/02-found-2.png",width:71,height:32},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/SupportUkraine/03-found-1.png",img2:"../img/SupportUkraine/03-found-2.png",width:219,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/SupportUkraine/04-found-1.png",img2:"../img/SupportUkraine/04-found-2.png",width:136,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/SupportUkraine/05-found-1.png",img2:"../img/SupportUkraine/05-found-2.png",width:76,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/SupportUkraine/06-found-1.png",img2:"../img/SupportUkraine/06-found-2.png",width:96,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/SupportUkraine/07-found-1.png",img2:"../img/SupportUkraine/07-found-2.png",width:57,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/SupportUkraine/08-found-1.png",img2:"../img/SupportUkraine/08-found-2.png",width:106,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/SupportUkraine/09-found-1.png",img2:"../img/SupportUkraine/09-found-2.png",width:180,height:32}],y=document.querySelector(".logoContainer");function x(){const o=S.map(({title:i,url:n,img:r,img2:e,width:t,height:s},p)=>`<div class="logo__item fund-item"><p class="fundNumber">${(p+1).toString().padStart(2,"0")}</p>
        <a href="${n}" class="logo__img"  target="_blank" crossorigin="anonymous"  rel="noopener noreferrer nofollow" aria-label="${i}" >
        <picture>
        <source srcset="${r}, ${e} 2x" />
        <img src="${r}" alt="${i}" loading="lazy" width="${t}" height="${s}">
      </picture>
        </a></div>
        
    `).join("");y.insertAdjacentHTML("beforeend",o)}x();const v=document.querySelector(".swiper-container"),c=document.querySelector(".logoContainer"),L=document.querySelector(".logo__item"),U=document.querySelector(".swiper-button-next"),g=document.querySelector(".swiper-button-next__icon");let a=1;const f=100;let u=Math.ceil((L.clientHeight*c.children.length+20*(c.children.length-1)-v.clientHeight)/f);U.addEventListener("click",$);function $(){a<=u?(a===u&&(g.style.transform="rotate(180deg)"),c.style.transform=`translateY(${-f*a}px)`,++a):(a=1,c.style.transform="",g.style.transform="")}(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector(".close-modal"),backdrop:document.querySelector("[data-modal-backdrop]"),modal:document.querySelector(".modal")};o.openModalBtn.addEventListener("click",i),o.closeModalBtn.addEventListener("click",n),o.backdrop.addEventListener("click",n);function i(){o.modal.classList.remove("is-hidden"),o.backdrop.classList.remove("is-hidden")}function n(){o.modal.classList.add("is-hidden"),o.backdrop.classList.add("is-hidden")}})();const m=document.querySelector(".shoplist-list"),h=document.querySelector(".shoplist-inside"),k="users-book",l=JSON.parse(localStorage.getItem(k));function b(o){const i=o.map(({book_image:n,title:r,title_name:e,description:t,author:s,buy_link:p,buy_links:d,_id:w})=>`<li class="shopingList-item" data-id="${w}">
                <button type="button" class="deleted-button">
                    <svg class="deleted-button-icon" width="16" height="16">
                        <use href="./img/icons.svg#shop-list-delete"></use>
                    </svg>
                </button> 

                <div class="books-img">
                    ${n}
                </div>

                <div class="info-list">
                    <h2 class="title-book">${r}</h2>
                    <p class="title-names">${e}</p>
                    <p class="description js-description">${t}</p>
                    <p class="book-author">${s}</p>

                    <div class="book-link">
                        <a class="amazon-icon" href="${p}" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="amazon-logo">
              <source srcset="./img/shopping-list/amazon.png 1x, ./img/shopping-list/amazon@2x.png 2x" media="(min-width: 1440px)" />

              <source srcset="./img/shopping-list/tablet/amazon.png 1x, ./img/shopping-list/tablet/amazon@2x.png 2x" media="(min-width: 768px)" />

              <source srcset="./img/shopping-list/mobile/amazon.png 1x, ./img/shopping-list/mobile/amazon@2x.png 2x" media="(max-width: 767px)" />

              <img class="amazon-logo" src="./img/mobile/amazon.png" alt="books" />
            </picture>          
                        </a>
                        <a class="apple-icon" href="${d}" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="apple-logo">
              <source srcset="./img/shopping-list/book.png 1x, ./img/shopping-list/book@2x.png 2x" media="(min-width: 1440px)" />

              <source srcset="./img/shopping-list/tablet/book.png 1x, ./img/shopping-list/tablet/book@2x.png 2x" media="(min-width: 768px)" />

              <source srcset="./img/shopping-list/mobile/book.png 1x, ./img/shopping-list/mobile/book@2x.png 2x" media="(max-width: 767px)" />

              <img class="apple-logo" src="./img/mobile/book.png" alt="books" />
            </picture>                
                        </a>
                    </div>
                </div>
            </li>`).join("");l.length!==0?(h.hidden=!0,m.innerHTML=i,document.querySelectorAll(".deleted-button").forEach(r=>{r.addEventListener("click",E)})):(h.hidden=!1,m.innerHTML="  ")}b(l);function E(o){const i=o.target.closest(".shopingList-item").dataset.id,n=l.findIndex(r=>r._id===i);n!==-1?(l.splice(n,1),localStorage.setItem(k,JSON.stringify(l)),b(l)):console.error("Книга не знайдена")}
