(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const h=document.querySelector(".header__theme-switch-checkbox"),d=document.querySelector(".header"),l=document.querySelector(".border"),p=document.querySelector("body"),k=localStorage.getItem("theme");k&&(h.checked=k==="dark");function F(){h.checked?(l.style.backgroundColor="#111111",d.style.backgroundColor="#111111",l.style.border="1.5px solid #FFF",l.style.borderRadius="0px 0px 8px 8px",d.style.color="#FFFFFF",p.style.backgroundColor="#202024",p.style.color="#FFFFFF",localStorage.setItem("theme","dark")):(l.style.border="2px solid black",l.style.borderRadius="0 0 15px 15px",l.style.backgroundColor="#FFFFFF",d.style.backgroundColor="#FFFFFF",d.style.color="#111111",p.style.backgroundColor="#F6F6F6",p.style.color="#111111",localStorage.setItem("theme","light"))}h.addEventListener("change",F);F();const u=document.querySelector(".mobile-menu-button"),b=document.querySelector(".header-modal");u.addEventListener("click",()=>{u.textContent==="B"?(b.style.display="block",u.innerHTML="x"):(b.style.display="none",u.innerHTML="B")});const C=document.querySelectorAll("ul a");C.forEach(function(t){const n=t.getAttribute("href"),i=window.location.pathname;n===i&&t.classList.add("active")});const E=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/SupportUkraine/01-found-1.png",img2:"../img/SupportUkraine/01-found-2.png",width:154,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/SupportUkraine/02-found-1.png",img2:"../img/SupportUkraine/02-found-2.png",width:71,height:32},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/SupportUkraine/03-found-1.png",img2:"../img/SupportUkraine/03-found-2.png",width:219,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/SupportUkraine/04-found-1.png",img2:"../img/SupportUkraine/04-found-2.png",width:136,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/SupportUkraine/05-found-1.png",img2:"../img/SupportUkraine/05-found-2.png",width:76,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/SupportUkraine/06-found-1.png",img2:"../img/SupportUkraine/06-found-2.png",width:96,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/SupportUkraine/07-found-1.png",img2:"../img/SupportUkraine/07-found-2.png",width:57,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/SupportUkraine/08-found-1.png",img2:"../img/SupportUkraine/08-found-2.png",width:106,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/SupportUkraine/09-found-1.png",img2:"../img/SupportUkraine/09-found-2.png",width:180,height:32}],$=document.querySelector(".logoContainer");function M(){const t=E.map(({title:n,url:i,img:r,img2:e,width:o,height:s},m)=>`<div class="logo__item fund-item"><p class="fundNumber">${(m+1).toString().padStart(2,"0")}</p>
        <a href="${i}" class="logo__img"  target="_blank" crossorigin="anonymous"  rel="noopener noreferrer nofollow" aria-label="${n}" >
        <picture>
        <source srcset="${r}, ${e} 2x" />
        <img src="${r}" alt="${n}" loading="lazy" width="${o}" height="${s}">
      </picture>
        </a></div>
        
    `).join("");$.insertAdjacentHTML("beforeend",t)}M();const I=document.querySelector(".swiper-container"),g=document.querySelector(".logoContainer"),_=document.querySelector(".logo__item"),z=document.querySelector(".swiper-button-next"),y=document.querySelector(".swiper-button-next__icon");let c=1;const v=100;let w=Math.ceil((_.clientHeight*g.children.length+20*(g.children.length-1)-I.clientHeight)/v);z.addEventListener("click",O);function O(){c<=w?(c===w&&(y.style.transform="rotate(180deg)"),g.style.transform=`translateY(${-v*c}px)`,++c):(c=1,g.style.transform="",y.style.transform="")}(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector(".close-modal"),backdrop:document.querySelector("[data-modal-backdrop]"),modal:document.querySelector(".modal")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",i),t.backdrop.addEventListener("click",i);function n(){t.modal.classList.remove("is-hidden"),t.backdrop.classList.remove("is-hidden")}function i(){t.modal.classList.add("is-hidden"),t.backdrop.classList.add("is-hidden")}})();const S=document.querySelector(".shoplist-list"),x=document.querySelector(".shoplist-inside"),L="users-book",a=JSON.parse(localStorage.getItem(L));function q(t){const n=t.map(({book_image:i,title:r,title_name:e,description:o,author:s,buy_link:m,buy_links:f,_id:U})=>`<li class="shopingList-item" data-id="${U}">
                <button type="button" class="deleted-button">
                    <svg class="deleted-button-icon" width="16" height="16">
                        <use href="./img/icons.svg#shop-list-delete"></use>
                    </svg>
                </button> 

                <div class="books-img">
                    ${i}
                </div>

                <div class="info-list">
                    <h2 class="title-book">${r}</h2>
                    <p class="title-names">${e}</p>
                    <p class="description js-description">${o}</p>
                    <p class="book-author">${s}</p>

                    <div class="book-link">
                        <a class="amazon-icon" href="${m}" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="amazon-logo">
              <source srcset="./img/shopping-list/amazon.png 1x, ./img/shopping-list/amazon@2x.png 2x" media="(min-width: 1440px)" />

              <source srcset="./img/shopping-list/tablet/amazon.png 1x, ./img/shopping-list/tablet/amazon@2x.png 2x" media="(min-width: 768px)" />

              <source srcset="./img/shopping-list/mobile/amazon.png 1x, ./img/shopping-list/mobile/amazon@2x.png 2x" media="(max-width: 767px)" />

              <img class="amazon-logo" src="./img/mobile/amazon.png" alt="books" />
            </picture>          
                        </a>
                        <a class="apple-icon" href="${f}" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="apple-logo">
              <source srcset="./img/shopping-list/book.png 1x, ./img/shopping-list/book@2x.png 2x" media="(min-width: 1440px)" />

              <source srcset="./img/shopping-list/tablet/book.png 1x, ./img/shopping-list/tablet/book@2x.png 2x" media="(min-width: 768px)" />

              <source srcset="./img/shopping-list/mobile/book.png 1x, ./img/shopping-list/mobile/book@2x.png 2x" media="(max-width: 767px)" />

              <img class="apple-logo" src="./img/mobile/book.png" alt="books" />
            </picture>                
                        </a>
                    </div>
                </div>
            </li>`).join("");a.length!==0?(x.hidden=!0,S.innerHTML=n,document.querySelectorAll(".deleted-button").forEach(r=>{r.addEventListener("click",T)})):(x.hidden=!1,S.innerHTML="  ")}q(a);function T(t){const n=t.target.closest(".shopingList-item").dataset.id,i=a.findIndex(r=>r._id===n);i!==-1?(a.splice(i,1),localStorage.setItem(L,JSON.stringify(a)),q(a)):console.error("Книга не знайдена")}
