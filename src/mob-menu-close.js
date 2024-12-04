const closeButton = document.querySelector('.mob-menu-close-btn');
const menu = document.querySelector('.mob-menu');

closeButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});