import axios from 'axios';

const categoryList = document.querySelector('.category-list');
const allCategories = document.getElementById('all-categories');
const bestSellers = document.querySelector('.best-sellers');
const bestSellersList = document.querySelector('.best-sellers-list');
const booksList = document.querySelector('.books-list');
const mediaTablet = window.matchMedia('(min-width: 768px) and (max-width: 1280px)');
const mediaDesktop = window.matchMedia('(min-width: 1280px)');

console.log(mediaDesktop.matches);

const URL = 'https://books-backend.p.goit.global';

async function getCategoryList() {
  try {
    const { data } = await axios.get(`${URL}/books/category-list`);
    categoryList.insertAdjacentHTML(
      'beforeend',
      createCategoryListMarkup(data)
    );
    allCategories.style.color = '#4f2ee8';
    allCategories.style.textTransform = 'uppercase';
    allCategories.style.fontWeight = '700';
    // console.log(data);
  } catch (err) {
    console.log('TRY-CATCH:', err);
  }
}
getCategoryList();

allCategories.addEventListener('click', getBestSellersBooks);

async function getBestSellersBooks() {
  try {
    const { data } = await axios.get(`${URL}/books/top-books`);
    bestSellers.style.display = 'block';
    booksList.innerHTML = '';
    bestSellersList.insertAdjacentHTML(
      'beforeend',
      createBestSellersMarkup(data)
    );
    for (const child of bestSellersList.children) {
      const btn = child.lastElementChild;
      btn.addEventListener('click', getBooksListByBtn);
    }
    // console.log(data);
  } catch (err) {
    console.log('TRY-CATCH:', err);
  }
}
getBestSellersBooks();

categoryList.addEventListener('click', getBooksList);
async function getBooksList(event) {
  event.preventDefault();
  try {
    for (const child of categoryList.children) {
      child.removeAttribute('style');
    }
    const category = event.target;
    category.style.color = '#4f2ee8';
    category.style.textTransform = 'uppercase';
    category.style.fontWeight = '700';

    const { data } = await axios.get(
      `${URL}/books/category?category=${category.textContent}`
    );
    bestSellers.style.display = 'none';
    booksList.innerHTML = '';
    if (booksList.previousElementSibling.tagName === "H1") {
    booksList.previousElementSibling.innerHTML = ''; 
    }
    booksList.insertAdjacentHTML('beforeend', createBooksListMarkup(data));
    booksList.insertAdjacentHTML(
      'beforebegin',
      `<h1 class="title">${category.textContent}</h1>`
    );
    if (mediaTablet.matches === true || mediaDesktop.matches === true) {
      booksList.className = 'books-list-tab-desk';
    };
    // console.log(data);
  } catch (err) {
    console.log('TRY-CATCH:', err);
  }
}

async function getBooksListByBtn(event) {
  event.preventDefault();
  try {
    const currentCategory = event.currentTarget.id;
    const category = categoryList.children;
    for (const child of category) {
      child.removeAttribute('style');
      // console.log(child);
      // if(child.textContent === currentCategory){
      //     child.style.color = "#4f2ee8";
      //     child.style.textTransform = "uppercase";
      //     child.style.fontWeight = "700";
      // }
    }

    const { data } = await axios.get(
      `${URL}/books/category?category=${currentCategory}`
    );
    bestSellers.style.display = 'none';
    booksList.innerHTML = '';
    if (booksList.previousElementSibling.tagName === "H1") {
        booksList.previousElementSibling.innerHTML = ''; 
        }
    booksList.insertAdjacentHTML(
      'beforebegin',
      `<h1 class="title">${currentCategory}</h1>`
    );
    booksList.insertAdjacentHTML('beforeend', createBooksListMarkup(data));
    window.scrollTo(0, 0);
    if (mediaTablet.matches === true || mediaDesktop.matches === true) {
      booksList.className = 'books-list-tab-desk';
    }
    // console.log(data);
  } catch (err) {
    console.log('TRY-CATCH:', err);
  }
}

function createCategoryListMarkup(categories) {
  return categories
    .map(
      category => `
    <li class="category">${category.list_name}
    </li>`
    )
    .join('');
}

function createBestSellersMarkup(categories) {
  if (mediaTablet.matches === true) {
    return categories
      .map(
        ({ list_name, books }) =>
          `<li class="books-container-tab-desk"><h2 class="book-category">${list_name}</h2>
          <ul class="books-list-tab-desk">
          <li class="book-card">
    <img class="book-image" src="${books[0].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[0].title}</h3>
    <p class="book-author">${books[0].author}</p>
    </li>
    <li class="book-card">
    <img class="book-image" src="${books[1].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[1].title}</h3>
    <p class="book-author">${books[1].author}</p>
    </li>
    <li class="book-card">
    <img class="book-image" src="${books[2].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[2].title}</h3>
    <p class="book-author">${books[2].author}</p>
    </li></ul>
    <button class="see-more-btn" id="${list_name}" type="button">See more</button></li>`
      )
      .join('');
  } else if (mediaDesktop.matches === true) {
    return categories
      .map(
        ({ list_name, books }) =>
          `<li class="books-container-tab-desk"><h2 class="book-category">${list_name}</h2>
          <ul class="books-list-tab-desk">
          <li class="book-card">
    <img class="book-image" src="${books[0].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[0].title}</h3>
    <p class="book-author">${books[0].author}</p>
    </li>
    <li class="book-card">
    <img class="book-image" src="${books[1].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[1].title}</h3>
    <p class="book-author">${books[1].author}</p>
    </li>
    <li class="book-card">
    <img class="book-image" src="${books[2].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[2].title}</h3>
    <p class="book-author">${books[2].author}</p>
    </li>
    <li class="book-card">
    <img class="book-image" src="${books[3].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[3].title}</h3>
    <p class="book-author">${books[3].author}</p>
    </li>
    <li class="book-card">
    <img class="book-image" src="${books[4].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[4].title}</h3>
    <p class="book-author">${books[4].author}</p>
    </li></ul>
    <button class="see-more-btn" id="${list_name}" type="button">See more</button></li>`
      )
      .join('');
  } else {
    return categories
      .map(
        ({ list_name, books }) =>
          `<li class="book-card">
    <h2 class="book-category">${list_name}</h2>
    <img class="book-image" src="${books[0].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[0].title}</h3>
    <p class="book-author">${books[0].author}</p>
    <button class="see-more-btn" id="${list_name}" type="button">See more</button>
    </li>`
      )
      .join('');
  }
}

function createBooksListMarkup(books) {
  return books
    .map(
      ({ book_image, title, author }) =>
        `<div class="book-card">
    <img class="book-image" src="${book_image}" alt="${title} book cover" />
    <h2 class="book-name">${title}</h2>
    <p class="book-author">${author}</p>
    </div>`
    )
    .join('');
}
