import axios from 'axios';
import Notiflix from 'notiflix';

const URL = 'https://books-backend.p.goit.global/books/';

async function getInformationById(id) {
  try {
    const response = await axios.get(`${URL}${id}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Error fetching book information. Please try again later');
    console.error(error.message);
    return null;
  }
}

const modalBackdrop = document.querySelector('.modal-backdrop');
const modalTexts = document.querySelector('.modal-texts');
const addToListButton = document.querySelector('.add-to-list');
const textAdd = document.querySelector('.textAdd');
const textAfterBuy = document.querySelector('.textBuy');
const modalWrapper = document.querySelector('.modal-markup');

const KEY_NAME = 'shopping-list';
let shoppingListArr = [];
let openBookObj = null;

modalBackdrop.addEventListener('click', closeModal);
addToListButton.addEventListener('click', shoppingButton);

function closeModal() {
  modalTexts.style.opacity = 0;
  setTimeout(() => {
    modalBackdrop.style.display = 'none';
  }, 200);
  addToListButton.hidden = true;
  textAfterBuy.hidden = true;
  document.removeEventListener('keydown', onKeydown);
}

function shoppingButton() {
  if (openBookObj) {
    if (!shoppingListArr.some((obj) => obj._id === openBookObj._id)) {
      shoppingListArr.push(openBookObj);
      localStorage.setItem(KEY_NAME, JSON.stringify(shoppingListArr));
    } else {
      const index = shoppingListArr.findIndex((obj) => obj._id === openBookObj._id);
      shoppingListArr.splice(index, 1);
      localStorage.setItem(KEY_NAME, JSON.stringify(shoppingListArr));
    }
    updateShoppingButtonState();
  }
}

function openModal() {
  modalBackdrop.style.display = 'block';
  modalTexts.style.opacity = 1;
  window.addEventListener('click', outsideClick);
  document.addEventListener('keydown', onKeydown);
}

function onKeydown(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function outsideClick(event) {
  if (event.target === modalBackdrop) {
    closeModal();
  }
}

function updateShoppingButtonState() {
  if (openBookObj) {
    if (shoppingListArr.some((obj) => obj._id === openBookObj._id)) {
      addToListButton.hidden = true;
      textAfterBuy.hidden = false;
    } else {
      addToListButton.hidden = false;
      textAfterBuy.hidden = true;
    }
  }
}

async function getDataBook(id) {
  openBookObj = null;
  try {
    openBookObj = await getInformationById(id);
    if (openBookObj) {
      updateShoppingButtonState();
      createModalMarkup(openBookObj);
      openModal(); 
    }
  } catch (error) {
    console.error(error);
  }
}

function createModalMarkup({
  book_image,
  title,
  author,
  description
}) {
  return `
    <div class="flex-modal modal-content">
      <div class="img">
        <img class="book-cover" src="${book_image}" alt="Book Cover" />
      </div>
      <div class="modal-texts">
        <h2 class="book-title">${title}</h2>
        <p class="book-author">${author}</p>
        <p class="book-description">${description}</p>
        <ul class="modalImg">
          <li>
            <a href="/src/img/modal/amazon.png" target="_blank" rel="noopener noreferrer nofollow">
              <picture>
                <source
                  srcset="
                    /src/img/modal/amazon.png 1x,
                    /src/img/modal/amazon@2x.png 2x
                  "
                />
                <img
                  class="img-modal-amazon hover-img"
                  src="/src/img/modal/amazon.png"
                  alt="link-amazon"
                />
              </picture>
            </a>
          </li>
          <li>
            <a href="./" target="_blank" rel="noopener noreferrer nofollow">
              <picture>
                <source
                  srcset="/src/img/modal/book.png 1x, /src/img/modal/book@2x.png 2x"
                />
                <img
                  class="img-modal-bookshop hover-img"
                  src="/src/img/modal/book.png"
                  alt="link-amazon"
                />
              </picture>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `;
}

