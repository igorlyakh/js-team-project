const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('class', 'icon-scroll-up');
svgElement.setAttribute('width', '24');
svgElement.setAttribute('height', '24');

const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
useElement.setAttribute('href', '/src/images/icons.svg#icon-scroll-up');
svgElement.appendChild(useElement);

// button
const button = document.createElement('button');
button.classList.add('scroll-up-button');
button.appendChild(svgElement);
document.body.appendChild(button);

// show
function toggleScrollButton() {
  const scrollButton = document.querySelector('.scroll-up-button');
  if (window.scrollY > 100) {
    scrollButton.style.display = 'block';
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

//  listener and scrollToTop
document.querySelector('.scroll-up-button').addEventListener('click', scrollToTop);
