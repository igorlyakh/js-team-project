const shoppingBooks = document.querySelector('.shoplist-list');
const shopListInside = document.querySelector('.shoplist-inside');

const DATA_KEY = 'users-book';

const localData = JSON.parse(localStorage.getItem(DATA_KEY));

function createShoppingList(lists) {
  const markupList = lists
    .map(
      ({
        book_image,
        title,
        title_name,
        description,
        author,
        buy_link,
        buy_links,
        _id,
      }) => {
        return `<li class="shopingList-item" data-id="${_id}">
                <button type="button" class="deleted-button">
                    <svg class="deleted-button-icon" width="16" height="16">
                        <use href="./img/icons.svg#shop-list-delete"></use>
                    </svg>
                </button> 

                <div class="books-img">
                    ${book_image}
                </div>

                <div class="info-list">
                    <h2 class="title-book">${title}</h2>
                    <p class="title-names">${title_name}</p>
                    <p class="description js-description">${description}</p>
                    <p class="book-author">${author}</p>

                    <div class="book-link">
                        <a class="amazon-icon" href="${buy_link}" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="amazon-logo">
              <source srcset="./img/shopping-list/amazon.png 1x, ./img/shopping-list/amazon@2x.png 2x" media="(min-width: 1440px)" />

              <source srcset="./img/shopping-list/tablet/amazon.png 1x, ./img/shopping-list/tablet/amazon@2x.png 2x" media="(min-width: 768px)" />

              <source srcset="./img/shopping-list/mobile/amazon.png 1x, ./img/shopping-list/mobile/amazon@2x.png 2x" media="(max-width: 767px)" />

              <img class="amazon-logo" src="./img/mobile/amazon.png" alt="books" />
            </picture>          
                        </a>
                        <a class="apple-icon" href="${buy_links}" target="_blank" rel="noopener noreferrer nofollow">
                            <picture class="apple-logo">
              <source srcset="./img/shopping-list/book.png 1x, ./img/shopping-list/book@2x.png 2x" media="(min-width: 1440px)" />

              <source srcset="./img/shopping-list/tablet/book.png 1x, ./img/shopping-list/tablet/book@2x.png 2x" media="(min-width: 768px)" />

              <source srcset="./img/shopping-list/mobile/book.png 1x, ./img/shopping-list/mobile/book@2x.png 2x" media="(max-width: 767px)" />

              <img class="apple-logo" src="./img/mobile/book.png" alt="books" />
            </picture>                
                        </a>
                    </div>
                </div>
            </li>`;
      }
    )
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