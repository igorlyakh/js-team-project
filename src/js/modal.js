import axios from 'axios';

const openModal = document.querySelector('.best-sellers-list');
const booksList = document.querySelector('.books-list');
const modalBackdrop = document.querySelector('.modal-backdrop');
const closeButton = document.querySelector('.close-button');

const refs = {
  title: document.querySelector('.book-title'),
  author: document.querySelector('.book-author'),
  dscr: document.querySelector('.book-description'),
  img: document.querySelector('.book-cover'),
};

// Add an event listener to elements with data-modal-open
document.addEventListener('click', (e) => {
  if (e.target.dataset.modal) {
    // Show the modal
    modalBackdrop.style.display = 'flex';
  }
});

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the modal
  modalBackdrop.style.display = 'none';
});

// Add an event listener to the modal backdrop
modalBackdrop.addEventListener('click', (e) => {
  // Check if the click occurred outside the modal container
  if (e.target === modalBackdrop) {
    // Hide the modal
    modalBackdrop.style.display = 'none';
  }
});

// Rest of your code for opening book details remains the same
const commonListContainer = document.querySelector('.home');

commonListContainer.addEventListener('click', (e) => {
  const targetBookCard = e.target.closest('li.book-card');
  if (targetBookCard) {
    const bookId = targetBookCard.dataset.id;
    getBookById(bookId).then((res) => {
      console.log(res);
      refs.img.setAttribute('src', res.book_image);
      refs.title.innerHTML = res.list_name;
      refs.author.innerHTML = res.author;
      if (res.description.length === 0) {
        refs.dscr.innerHTML = 'Нет описания';
      } else {
        refs.dscr.innerHTML = res.description;
      }
    });
  }
});

async function getBookById(id) {
  const data = await axios.get(
    `https://books-backend.p.goit.global/books/${id}`
  );
  const res = await data.data;
  return res;
}
