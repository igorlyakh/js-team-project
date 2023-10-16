const themeSwitch = document.querySelector('.header__theme-switch-checkbox');
const header = document.querySelector('.header');
const border = document.querySelector('.border');
const body = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');
const logo = document.querySelector('.logo-text');
const openIcon = document.querySelector('.burger');
const closeIcon = document.querySelector('.close');
const block = document.querySelector('.shop-block');
const moreButton = document.querySelectorAll('.see-more-btn');

const categoryList = document.querySelectorAll('.category');
// ===============Theme==================
if (savedTheme) {
  themeSwitch.checked = savedTheme === 'dark';
}

function updateTheme() {
  if (themeSwitch.checked) {
    border.style.backgroundColor = '#111111';
    header.style.backgroundColor = '#111111';
    border.style.border = '1.5px solid #FFF';
    border.style.borderRadius = '0px 0px 8px 8px';

    header.style.color = '#FFFFFF';
    body.style.backgroundColor = '#202024';
    body.style.color = '#FFFFFF';
    localStorage.setItem('theme', 'dark');
    logo.style.fill = '#F3F3F3';
    block.style.stroke = '#FFFFFF';
    openIcon.style.stroke = '#FFFFFF';
    closeIcon.style.stroke = '#FFFFFF';
    categoryList.forEach(function (element) {
      const color = window.getComputedStyle(element).getPropertyValue('color');
      if (color === '#4f2ee8') {
        element.style.color = '#EAC645';
      } else {
        element.style.color = 'rgba(255, 255, 255, 0.60)';
      }
    });
    for (const button of moreButton) {
      button.style.color = '#FFF';
    }
  } else {
    border.style.border = '2px solid black';
    border.style.borderRadius = '0 0 15px 15px';
    border.style.backgroundColor = '#FFFFFF';
    header.style.backgroundColor = '#FFFFFF';
    header.style.color = '#111111';
    body.style.backgroundColor = '#F6F6F6';
    body.style.color = '#111111';
    localStorage.setItem('theme', 'light');
    logo.style.fill = '#000';
    block.style.stroke = '#111111';
    openIcon.style.stroke = '#111111';
    closeIcon.style.stroke = '#111111';
    categoryList.forEach(function (element) {
      const color = window.getComputedStyle(element).getPropertyValue('color');
      if (color === '#EAC645') {
        element.style.color = '#4f2ee8';
      } else {
        element.style.color = 'rgba(17, 17, 17, 0.60)';
      }
    });
    for (const button of moreButton) {
      button.style.color = '#111';
    }
  }
}

themeSwitch.addEventListener('change', updateTheme);

updateTheme();

// ===============Mobile menu==================

const burger = document.querySelector('.mobile-menu-button');
const closeButton = document.querySelector('.mobile-menu-button-close');

const modal = document.querySelector('.header-modal');

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    burger.style.display = 'flex';
    burger.addEventListener('click', () => {
      burger.style.display = 'none';
      closeButton.style.display = 'flex';
      modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
      closeButton.style.display = 'none';
      burger.style.display = 'flex';
      modal.style.display = 'none';
    });
  } else {
    modal.style.display = 'none';
    closeButton.style.display = 'none';
    burger.style.display = 'none';
  }
}
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

// ===============Active href==================

const links = document.querySelectorAll('ul a');
links.forEach(function (link) {
  const linkPath = link.getAttribute('href');
  const currentPage = window.location.pathname;
  if (linkPath === currentPage) {
    link.classList.add('active');
  }
});
