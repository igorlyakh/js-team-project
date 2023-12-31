import axios from 'axios';
import Notiflix from 'notiflix';

const path = window.location.href.split('/');

if (path[path.length - 1] === '') {
  const categoryList = document.querySelector('.category-list');
  const allCategories = document.getElementById('all-categories');
  const bestSellers = document.querySelector('.best-sellers');
  const bestSellersList = document.querySelector('.best-sellers-list');
  const booksListContainer = document.querySelector('.books-list-container');
  const themeSwitch = document.querySelector('.header__theme-switch-checkbox');
  const mediaTablet = window.matchMedia(
    '(min-width: 768px) and (max-width: 1280px)'
  );
  const mediaDesktop = window.matchMedia('(min-width: 1280px)');

  const URL = 'https://books-backend.p.goit.global';

  // Function for the list of categories

  async function getCategoryList() {
    try {
      const { data } = await axios.get(`${URL}/books/category-list`);
      categoryList.insertAdjacentHTML(
        'beforeend',
        createCategoryListMarkup(data)
      );

      const theme = localStorage.getItem('theme');
      for (const child of categoryList.children) {
        child.removeAttribute('style');
        themeSwitch.addEventListener('change', () => {
          if (themeSwitch.checked) {
            selectedStyleBlack(allCategories);
            child.classList.add('category-black');
          } else {
            selectedStyle(allCategories);
            child.classList.remove('category-black');
          }
        });
        if (theme === 'dark') {
          child.classList.add('category-black');
        } else {
          child.classList.remove('category-black');
        }
        selectedStyle(allCategories);
        if (theme === 'dark') {
          selectedStyleBlack(allCategories);
        } else {
          selectedStyle(allCategories);
        }
      }
    } catch (err) {
      console.log('TRY-CATCH:', err);
      Notiflix.Notify.failure('This page is empty, please try again');
    }
  }
  getCategoryList();

  // Function for the list of BEST SELLERS BOOKS
  allCategories.addEventListener('click', getBestSellersBooks);

  async function getBestSellersBooks() {
    try {
      const { data } = await axios.get(`${URL}/books/top-books`);
      bestSellers.style.display = 'block';
      booksListContainer.innerHTML = '';
      bestSellersList.insertAdjacentHTML(
        'beforeend',
        createBestSellersMarkup(data)
      );

      for (const child of bestSellersList.children) {
        const btn = child.lastElementChild;
        btn.addEventListener('click', getBooksListByBtn);
        const theme = localStorage.getItem('theme');
        themeSwitch.addEventListener('change', () => {
          if (themeSwitch.checked) {
            btn.style.backgroundColor = '#202024';
            btn.style.color = '#ffffff';
          } else {
            btn.style.backgroundColor = '#ffffff';
            btn.style.color = '#202024';
          }
        });
        if (theme === 'dark') {
          btn.style.backgroundColor = '#202024';
          btn.style.color = '#ffffff';
        }
      }
    } catch (err) {
      console.log('TRY-CATCH:', err);
      Notiflix.Notify.failure('This page is empty, please try again');
    }
  }
  getBestSellersBooks();

  // Function for the list of BOOKS of each CATEGORY

  categoryList.addEventListener('click', getBooksList);
  async function getBooksList(event) {
    event.preventDefault();
    try {
      for (const child of categoryList.children) {
        child.removeAttribute('style');
      }
      const category = event.target;
      selectedStyle(category);

      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        selectedStyleBlack(category);
      }

      themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
          selectedStyleBlack(category);
        } else {
          selectedStyle(category);
        }
      });

      const { data } = await axios.get(
        `${URL}/books/category?category=${category.textContent}`
      );
      bestSellers.style.display = 'none';
      booksListContainer.innerHTML = '';

      const arrFromTitle = category.textContent.trim().split(' ');
      const lastWordOfTitle = arrFromTitle.pop();
      if (theme === 'dark') {
        booksListContainer.insertAdjacentHTML(
          'afterbegin',
          `<h1 class="title title__dark">${arrFromTitle.join(
            ' '
          )} <span class="title-accent">${lastWordOfTitle}</span></h1>
        <ul class="books-list"></ul>`
        );
      } else {
        booksListContainer.insertAdjacentHTML(
          'afterbegin',
          `<h1 class="title">${arrFromTitle.join(
            ' '
          )} <span class="title-accent">${lastWordOfTitle}</span></h1>
        <ul class="books-list"></ul>`
        );
      }

      themeSwitch.addEventListener('change', () => {
        const myTitle = document.querySelector('.title');
        if (themeSwitch.checked) {
          myTitle.classList.add('title__dark');
        } else {
          myTitle.classList.remove('title__dark');
        }
      });

      const booksList = document.querySelector('.books-list');
      booksList.insertAdjacentHTML('beforeend', createBooksListMarkup(data));

      if (mediaTablet.matches === true || mediaDesktop.matches === true) {
        booksList.className = 'books-list-tab-desk';
      }
    } catch (err) {
      console.log('TRY-CATCH:', err);
      Notiflix.Notify.failure('This page is empty, please try again');
    }
  }

  // Function for the list of BOOKS of each category BY BUTTON

  async function getBooksListByBtn(event) {
    event.preventDefault();
    try {
      const currentCategory = event.currentTarget.id;
      const categories = categoryList.children;
      for (const category of categories) {
        category.removeAttribute('style');
        if (category.textContent.trim() === currentCategory.trim()) {
          selectedStyle(category);
          themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
              selectedStyleBlack(category);
            } else {
              selectedStyle(category);
            }
          });
          const theme = localStorage.getItem('theme');
          if (theme === 'dark') {
            selectedStyleBlack(category);
          } else {
            selectedStyle(category);
          }
        }
      }

      const { data } = await axios.get(
        `${URL}/books/category?category=${currentCategory}`
      );
      bestSellers.style.display = 'none';
      booksListContainer.innerHTML = '';

      const arrFromTitle = currentCategory.trim().split(' ');
      const lastWordOfTitle = arrFromTitle.pop();
      if (theme === 'dark') {
        booksListContainer.insertAdjacentHTML(
          'afterbegin',
          `<h1 class="title title__dark">${arrFromTitle.join(
            ' '
          )} <span class="title-accent">${lastWordOfTitle}</span></h1>
      <ul class="books-list"></ul>`
        );
      } else {
        booksListContainer.insertAdjacentHTML(
          'afterbegin',
          `<h1 class="title">${arrFromTitle.join(
            ' '
          )} <span class="title-accent">${lastWordOfTitle}</span></h1>
      <ul class="books-list"></ul>`
        );
      }
      themeSwitch.addEventListener('change', () => {
        const myTitle = document.querySelector('.title');
        if (themeSwitch.checked) {
          myTitle.classList.add('title__dark');
        } else {
          myTitle.classList.remove('title__dark');
        }
      });
      const booksList = document.querySelector('.books-list');
      booksList.insertAdjacentHTML('beforeend', createBooksListMarkup(data));
      window.scrollTo(0, 0);

      if (mediaTablet.matches === true || mediaDesktop.matches === true) {
        booksList.className = 'books-list-tab-desk';
      }
    } catch (err) {
      console.log('TRY-CATCH:', err);
      Notiflix.Notify.failure('This page is empty, please try again');
    }
  }

  // Functions for creating MARKUPS

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
          <li class="book-card" data-id="${books[0]._id}">
    <img class="book-image" width="218" height="316" src="${books[0].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[0].title}</h3>
    <p class="book-author">${books[0].author}</p>
    </li>
    <li class="book-card" data-id="${books[1]._id}">
    <img class="book-image" width="218" height="316" src="${books[1].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[1].title}</h3>
    <p class="book-author">${books[1].author}</p>
    </li>
    <li class="book-card" data-id="${books[2]._id}">
    <img class="book-image" width="218" height="316" src="${books[2].book_image}" alt="${books[0].title} book cover" />
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
          <li class="book-card" data-id="${books[0]._id}">
    <img class="book-image" width="180" height="256" src="${books[0].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[0].title}</h3>
    <p class="book-author">${books[0].author}</p>
    </li>
    <li class="book-card" data-id="${books[1]._id}">
    <img class="book-image" width="180" height="256" src="${books[1].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[1].title}</h3>
    <p class="book-author">${books[1].author}</p>
    </li>
    <li class="book-card" data-id="${books[2]._id}">
    <img class="book-image" width="180" height="256" src="${books[2].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[2].title}</h3>
    <p class="book-author">${books[2].author}</p>
    </li>
    <li class="book-card" data-id="${books[3]._id}">
    <img class="book-image" width="180" height="256" src="${books[3].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[3].title}</h3>
    <p class="book-author">${books[3].author}</p>
    </li>
    <li class="book-card" data-id="${books[4]._id}">
    <img class="book-image" width="180" height="256" src="${books[4].book_image}" alt="${books[0].title} book cover" />
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
            `<li class="book-card" data-id="${books[0]._id}">
    <h2 class="book-category">${list_name}</h2>
    <img class="book-image" width="335" height="485" src="${books[0].book_image}" alt="${books[0].title} book cover" />
    <h3 class="book-name">${books[0].title}</h3>
    <p class="book-author">${books[0].author}</p>
    <button class="see-more-btn" id="${list_name}" type="button">See more</button>
    </li>`
        )
        .join('');
    }
  }

  function createBooksListMarkup(books) {
    if (mediaDesktop.matches === true) {
      return books
        .map(
          ({ _id, book_image, title, author }) =>
            `<li class="book-card" data-id="${_id}">
    <img class="book-image" width="180" height="256" src="${book_image}" alt="${title} book cover" />
    <h2 class="book-name">${title}</h2>
    <p class="book-author">${author}</p>
    </li>`
        )
        .join('');
    } else if (mediaTablet.matches === true) {
      return books
        .map(
          ({ _id, book_image, title, author }) =>
            `<li class="book-card" data-id="${_id}">
<img class="book-image" width="218" height="316" src="${book_image}" alt="${title} book cover" />
<h2 class="book-name">${title}</h2>
<p class="book-author">${author}</p>
</li>`
        )
        .join('');
    } else {
      return books
        .map(
          ({ _id, book_image, title, author }) =>
            `<li class="book-card" data-id="${_id}">
    <img class="book-image" width="335" height="485" src="${book_image}" alt="${title} book cover" />
    <h2 class="book-name">${title}</h2>
    <p class="book-author">${author}</p>
    </li>`
        )
        .join('');
    }
  }

  // Function for style of selected category
  function selectedStyle(categoryName) {
    return (categoryName.style.cssText = `color: #4f2ee8;
   text-transform: uppercase;
   font-weight: 700;`);
  }
  function selectedStyleBlack(categoryName) {
    return (categoryName.style.cssText = `color: #EAC645;
   text-transform: uppercase;
   font-weight: 700;`);
  }
}
