const themeSwitch = document.querySelector('.header__theme-switch-checkbox');
const header = document.querySelector('.header');
const border = document.querySelector('.border');
const body = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');

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
  } else {
    border.style.border = '2px solid black';
    border.style.borderRadius = '0 0 15px 15px';
    border.style.backgroundColor = '#FFFFFF';
    header.style.backgroundColor = '#FFFFFF';
    header.style.color = '#111111';
    body.style.backgroundColor = '#F6F6F6';
    body.style.color = '#111111';
    localStorage.setItem('theme', 'light');
  }
}

themeSwitch.addEventListener('change', updateTheme);

updateTheme();

// ===============Mobile menu==================

const burger = document.querySelector('.mobile-menu-button');
const modal = document.querySelector('.header-modal');

burger.addEventListener('click', () => {
  if (burger.textContent === 'B') {
    modal.style.display = 'block';
    burger.innerHTML = 'x';
  } else {
    modal.style.display = 'none';
    burger.innerHTML = 'B';
  }
});

// ===============Active href==================

const links = document.querySelectorAll('ul a');

links.forEach(function (link) {
  const linkPath = link.getAttribute('href');
  const currentPage = window.location.pathname;
  if (linkPath === currentPage) {
    link.classList.add('active');
  }
});
