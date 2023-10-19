const shoppingBooks = document.querySelector('.shoplist-list');
const shopListInside = document.querySelector('.shoplist-inside');
const path = window.location.href.split('/');

const DATA_KEY = 'users-book';

const localData = JSON.parse(localStorage.getItem(DATA_KEY));

if (path[path.length - 1] === 'shopping-list.html') {
  const themeSwitch = document.querySelector('.header__theme-switch-checkbox');
  const listText = document.querySelector('.shoplist-inside-text');
  function changeTextColor() {
    if (themeSwitch.checked) {
      listText.style.color = 'rgba(255, 255, 255, 0.60)';
    } else {
      listText.style.color = 'rgba(0, 0, 0, 0.6)';
    }
  }
  themeSwitch.addEventListener('change', changeTextColor);
  changeTextColor();
  function createShoppingList(lists) {
    if (lists === null) return;
    const markupList = lists
      .map(book => {
        return `<li class="shopingList-item" data-id="${book._id}">
                <button type="button" class="deleted-button">
                    <svg class="deleted-button-icon" width="16" height="16">
                        <use href="./img/icons.svg#shop-list-delete"></use>
                    </svg>
                </button> 

                    <img class="book-img" src="${book.book_image}" alt="${
          book.title
        }" />

                <div class="info-list">
                    <h2 class="title-book">${book.title}</h2>
                    <p class="title-names">${book.list_name}</p>
                    <p class="description js-description">${
                      book.description
                    }</p>
                    <p class="book-author">${book.author}</p>

                    <div class="book-link">
                        <a class="amazon-icon" href="${
                          book.buy_links[0].url
                        }" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="amazon-logo">
              <source srcset="${
                new URL('../img/shopping-list/amazon.png', import.meta.url).href
              } 1x, ${
          new URL('../img/shopping-list/amazon@2x.png', import.meta.url).href
        } 2x" media="(min-width: 1440px)" />

              <source srcset="${
                new URL(
                  '../img/shopping-list/tablet/amazon.png',
                  import.meta.url
                ).href
              } 1x, ${
          new URL('../img/shopping-list/tablet/amazon@2x.png', import.meta.url)
            .href
        } 2x" media="(min-width: 768px)" />

              <source srcset="${
                new URL(
                  '../img/shopping-list/mobile/amazon.png',
                  import.meta.url
                ).href
              } 1x, ${
          new URL('../img/shopping-list/mobile/amazon@2x.png', import.meta.url)
            .href
        } 2x" media="(max-width: 767px)" />

              <img class="amazon-logo" src="${
                new URL('../img/mobile/amazon.png', import.meta.url).href
              }" alt="books" />
            </picture>          
                        </a>
                        <a class="apple-icon" href="${
                          book.buy_links[1].url
                        }" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="apple-logo">
              <source srcset="${
                new URL('../img/shopping-list/book.png', import.meta.url).href
              } 1x, ${
          new URL('../img/shopping-list/book@2x.png', import.meta.url).href
        } 2x" media="(min-width: 1440px)" />

              <source srcset="${
                new URL('../img/shopping-list/tablet/book.png', import.meta.url)
                  .href
              } 1x, ${
          new URL('../img/shopping-list/tablet/book@2x.png', import.meta.url)
            .href
        } 2x" media="(min-width: 768px)" />

              <source srcset="${
                new URL('../img/shopping-list/mobile/book.png', import.meta.url)
                  .href
              } 1x, ${
          new URL('../img/shopping-list/mobile/book@2x.png', import.meta.url)
            .href
        } 2x" media="(max-width: 767px)" />

              <img class="apple-logo" src="${
                new URL('../img/mobile/book.png', import.meta.url).href
              }" alt="books" />
            </picture>                
                        </a>
                    </div>
                </div>
            </li>`;
      })
      .join('');

    if (localData.length !== 0) {
      shopListInside.hidden = true;
      shoppingBooks.innerHTML = markupList;

      const deleteButtons = document.querySelectorAll('.deleted-button');

      deleteButtons.forEach(btn => {
        btn.addEventListener('click', deletedShoppingList);
      });
    } else {
      shopListInside.hidden = false;
      shoppingBooks.innerHTML = '  ';
    }
  }

  createShoppingList(localData);

  function deletedShoppingList(event) {
    const bookId = event.target.closest('.shopingList-item').dataset.id;
    const indexToDelete = localData.findIndex(book => book._id === bookId);

    if (indexToDelete !== -1) {
      localData.splice(indexToDelete, 1);
      localStorage.setItem(DATA_KEY, JSON.stringify(localData));
      createShoppingList(localData);
    } else {
      console.error('Книга не знайдена');
    }
  }
}
