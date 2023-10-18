const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('width', '24');
svgElement.setAttribute('height', '24');

const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
useElement.setAttribute('href', './img/icons.svg#icon-scroll-up');
svgElement.appendChild(useElement);

// button
const button = document.createElement('button');
button.classList.add('scroll-up-button');
document.body.appendChild(button);

button.appendChild(svgElement);  

// show
function toggleScrollButton() {
  const scrollButton = document.querySelector('.scroll-up-button');
  if (window.scrollY > 100) {
    scrollButton.style.display = 'flex';
  } else {
    scrollButton.style.display = 'none';
  }
}

// scroll
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// listener
window.addEventListener('scroll', toggleScrollButton);

// listener and scrollToTop
document.querySelector('.scroll-up-button').addEventListener('click', scrollToTop);
