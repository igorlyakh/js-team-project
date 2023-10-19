const svgElement = document.createElement('img');

svgElement.setAttribute('width', '24');
svgElement.setAttribute('height', '24');
svgElement.setAttribute('class', 'img-scroll');
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
    behavior: 'smooth',
  });
}

// listener
window.addEventListener('scroll', toggleScrollButton);

// listener and scrollToTop
document
  .querySelector('.scroll-up-button')
  .addEventListener('click', scrollToTop);
