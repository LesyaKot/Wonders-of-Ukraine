const button = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.mobile-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});