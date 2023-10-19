import axios from 'axios';

const modalBackdrop = document.querySelector('.modal-backdrop');
const closeButton = document.querySelector('.close-button');
const addToShoppingListButton = document.querySelector('.add-to-list');
const DATA_KEY = 'users-book';

const refs = {
  title: document.querySelector('.book-title'),
  author: document.querySelector('.book-author'),
  dscr: document.querySelector('.book-description'),
  img: document.querySelector('.book-cover'),
};

function openModalWithData(res) {
  refs.img.setAttribute('src', res.book_image);
  refs.title.innerHTML = res.title;
  refs.author.innerHTML = res.author;
  refs.dscr.innerHTML = res.description || ' ';
  modalBackdrop.style.display = 'flex';

  // Check if the book is already in the shopping list
  const existingData = JSON.parse(localStorage.getItem(DATA_KEY)) || [];
  const isBookInList = existingData.some((item) => item._id === res._id);

  // Set the initial button text
  if (isBookInList) {
    addToShoppingListButton.innerHTML = 'Remove from Shopping List';
  } else {
    addToShoppingListButton.innerHTML = 'Add to Shopping List';
  }

  // Add a click event listener to the "Add to Shopping List" button
  addToShoppingListButton.addEventListener('click', () => {
    if (isBookInList) {
      // If the book is in the list, remove it
      removeBookFromList(res._id);
      addToShoppingListButton.innerHTML = 'Add to Shopping List';
      
    } else {
      // If the book is not in the list, add it
      addToLocalStorage(res);
      addToShoppingListButton.innerHTML = 'Remove from Shopping List';
     
    }
  });
}

function closeModal() {
  modalBackdrop.style.display = 'none';
}

document.addEventListener('click', async (e) => {
  const targetBookCard = e.target.closest('[data-id]');
  if (targetBookCard) {
    const bookId = targetBookCard.getAttribute('data-id');
    try {
      const res = await getBookById(bookId);
      openModalWithData(res);
    } catch (error) {
      console.error(error);
    }
  }
});

closeButton.addEventListener('click', () => {
  closeModal();
});

modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    closeModal();
  }
});

async function getBookById(id) {
  const data = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
  return data.data;
}

function addToLocalStorage(bookData) {
  const existingData = JSON.parse(localStorage.getItem(DATA_KEY)) || [];
  existingData.push(bookData);
  localStorage.setItem(DATA_KEY, JSON.stringify(existingData));
}

function removeBookFromList(bookId) {
  const existingData = JSON.parse(localStorage.getItem(DATA_KEY)) || [];
  const updatedData = existingData.filter((item) => item._id !== bookId);
  localStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
}
