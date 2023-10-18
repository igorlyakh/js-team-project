import axios from 'axios';

const openModal = document.querySelector('.best-sellers-list');

const refs = {
  title: document.querySelector('.book-title'),
  author: document.querySelector('.book-author'),
  dscr: document.querySelector('.book-description'),
  img: document.querySelector('.book-cover'),
};

openModal.addEventListener('click', e => {
  if (e.target.closest('li').classList.contains('book-card')) {
    console.log(e.target.closest('li'));
    const bookId = e.target.closest('li').dataset.id;
    getBookById(bookId).then(res => {
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
