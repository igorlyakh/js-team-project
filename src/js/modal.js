import axios from 'axios';
document.addEventListener('DOMContentLoaded', () => {
  

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
  
   
    document.addEventListener('click', (e) => {
      if (e.target.dataset.modal) {
      
        modalBackdrop.style.display = 'flex';
      }
    });

    
    closeButton.addEventListener('click', () => {
      
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

    
    const commonListContainer = document.querySelector('.home');

  commonListContainer.addEventListener('click', (e) => {
    const targetBookCard = e.target.closest('li.book-card');
    if (targetBookCard) {
      const bookId = targetBookCard.getAttribute('data-id'); 
      console.log('Clicked ID:', bookId); 
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

});
  





  