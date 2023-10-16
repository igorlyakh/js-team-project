
const booksPerPage = 4;  
let currentPage = 1;
const totalPages = Math.ceil(books.length / booksPerPage);

function getCurrentPage() {
  const activeButton = document.querySelector('.pagination-button.active');
  return parseInt(activeButton.innerText, 10);
}

function displayBooks(pageNumber) {
  const startIndex = (pageNumber - 1) * booksPerPage;
  const endIndex = Math.min(startIndex + booksPerPage, books.length);
  const booksToDisplay = books.slice(startIndex, endIndex);

  const bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = '';

  booksToDisplay.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Description:</strong> ${book.description}</p>
    `;
    bookListElement.appendChild(bookCard);
  });
}

function displayPagination(totalPages) {
  const pageNumbersElement = document.getElementById('pageNumbers');
  pageNumbersElement.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('pagination-button');
    pageButton.addEventListener('click', () => {
      currentPage = i;
      displayBooks(currentPage);
      updatePaginationButtons();
    });
    pageNumbersElement.appendChild(pageButton);
  }
}

function updatePaginationButtons() {
  const paginationButtons = document.querySelectorAll('.pagination-button');
  paginationButtons.forEach(button => {
    button.classList.remove('active');
    if (parseInt(button.innerText, 10) === currentPage) {
      button.classList.add('active');
    }
  });
}

const firstPageButton = document.getElementById('firstPage');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const lastPageButton = document.getElementById('lastPage');

function goToFirstPage() {
  currentPage = 1;
  displayBooks(currentPage);
  updatePaginationButtons();
}

function goToLastPage() {
  currentPage = totalPages;
  displayBooks(currentPage);
  updatePaginationButtons();
}

firstPageButton.addEventListener('click', goToFirstPage);
prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayBooks(currentPage);
    updatePaginationButtons();
  }
});
nextPageButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayBooks(currentPage);
    updatePaginationButtons();
  }
});
lastPageButton.addEventListener('click', goToLastPage);

displayBooks(currentPage);
displayPagination(totalPages);
updatePaginationButtons();