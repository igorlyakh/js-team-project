const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('.close-modal'),
  backdrop: document.querySelector('[data-modal-backdrop]'),
  modal: document.querySelector('.modal'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', closeModal);

function openModal() {
  refs.modal.classList.remove('is-hidden');
  refs.backdrop.classList.remove('is-hidden');
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.backdrop.classList.add('is-hidden');
}
