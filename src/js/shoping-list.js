const shoppingBooks = document.querySelector('.shoplist-list');
const shopListInside = document.querySelector('.shoplist-inside');

const data_key = 'users-book';

const localData = JSON.parse(localStorage.getItem(data_key));

function createShoppingList(lists) {
    const markupList = lists.map(
        ({ book_image, title, title_name, description, author, buy_link, buy_links, id }) => {
            return `<li class="shopingList-item" data-id="${id}">
                <button type="button" class="deleted-button">
                    <svg class="deleted-button-icon" width="16" height="16">
                        <use href="./"></use>
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
                            <img class="amazon-logo" src="../" alt="amazon" loading="lazy"/>            
                        </a>
                        <a class="apple-icon" href="${buy_links}" target="_blank" rel="noopener noreferrer nofollow">
                            <img class="apple-logo" src="../" alt="apple" loading="lazy"/>            
                        </a>
                    </div>
                </div>
            </li>`
        })
        .join('');

    if (localData.length !== 0) {
        shopListInside.hidden = true;
        shoppingBooks.innerHTML = markupList;

        const deleteButtons = document.querySelectorAll('.deleted-button');

        deleteButtons.forEach(button => {
            button.addEventListener('click', onDelete);
        });
    } else {
        shopListInside.hidden = false;
        shoppingBooks.innerHTML = "";
    }
}

createShoppingList(localData);

function onDelete(evt) {
    const bookId = evt.target.closest('.shopingList-item').dataset.id;
    const bookToRemoveId = localData.findIndex(book => book._id === bookId);
    if (bookToRemoveId !== -1) {
        localData.splice(bookToRemoveId, 1);
        localStorage.setItem(data_key, JSON.stringify(localData));
        createShoppingList(localData);
    }
}
