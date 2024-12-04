const button = document.querySelector('.burger-menu');
const menu = document.querySelector('.mob-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});