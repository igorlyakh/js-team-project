let upButton = document.getElementById("btn-scroll-up");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

upButton.addEventListener("click", topFunction);
