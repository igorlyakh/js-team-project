const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('../img/SupportUkraine/01-found-1.png', import.meta.url).href,
    img2: new URL('../img/SupportUkraine/01-found-2.png', import.meta.url).href,
    width: 154,
    height: 32,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('/img/SupportUkraine/02-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/02-found-2.png', import.meta.url).href,
    width: 62,
    height: 32,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('/img/SupportUkraine/04-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/04-found-2.png', import.meta.url).href,
    width: 101,
    height: 32,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('/img/SupportUkraine/06-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/06-found-2.png', import.meta.url).href,
    width: 82,
    height: 32,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('/img/SupportUkraine/07-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/07-found-2.png', import.meta.url).href,
    width: 55,
    height: 32,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('/img/SupportUkraine/09-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/09-found-2.png', import.meta.url).href,
    width: 115,
    height: 32,
  },

  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('/img/SupportUkraine/05-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/05-found-2.png', import.meta.url).href,
    width: 102,
    height: 32,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('/img/SupportUkraine/08-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/08-found-2.png', import.meta.url).href,
    width: 81,
    height: 32,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('/img/SupportUkraine/03-found-1.png', import.meta.url).href,
    img2: new URL('/img/SupportUkraine/03-found-2.png', import.meta.url).href,
    width: 114,
    height: 32,
  },
];

const logoContainer = document.querySelector('.logoContainer');

function renderLogos() {
  const markup = charityFunds
    .map(({ title, url, img, img2, width, height }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');
      return `<div class="logo__item fund-item"><p class="fundNumber">${paddedIndex}</p>
        <a href="${url}" class="logo__img"  target="_blank" crossorigin="anonymous"  rel="noopener noreferrer nofollow" aria-label="${title}" >
        <picture>
        <source srcset="${img}, ${img2} 2x" />
        <img src="${img}" alt="${title}" loading="lazy" width="${width}" height="${height}">
      </picture>
        </a></div>
        
    `;
    })
    .join('');
  logoContainer.insertAdjacentHTML('beforeend', markup);
}

renderLogos();

// slider---------------------------------------------------------------

const swiperOverflowContainerEl = document.querySelector('.swiper-container');
const logosContainerEl = document.querySelector('.logoContainer');
const logoItemEl = document.querySelector('.logo__item');
const btnDownEl = document.querySelector('.swiper-button-next');
const btnDownIconEl = document.querySelector('.swiper-button-next__icon');

let currentClick = 1;
const scrolledDistance = 100;

let numberOfClicks = Math.ceil(
  (logoItemEl.clientHeight * logosContainerEl.children.length +
    20 * (logosContainerEl.children.length - 1) -
    swiperOverflowContainerEl.clientHeight) /
    scrolledDistance
);

btnDownEl.addEventListener('click', onMoveDownClick);

function onMoveDownClick() {
  if (currentClick <= numberOfClicks) {
    if (currentClick === numberOfClicks) {
      btnDownIconEl.style.transform = 'rotate(180deg)';
    }

    logosContainerEl.style.transform = `translateY(${
      -scrolledDistance * currentClick
    }px)`;
    ++currentClick;
  } else {
    currentClick = 1;
    logosContainerEl.style.transform = '';

    btnDownIconEl.style.transform = '';
  }
}
