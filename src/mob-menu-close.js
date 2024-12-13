const closeButton = document.querySelector('.mob-menu-close-btn');
const menu = document.querySelector('.mobile-menu');

closeButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});