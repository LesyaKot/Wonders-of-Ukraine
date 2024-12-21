const openButton = document.querySelector('.mobile-menu-btn');
const closeButton = document.querySelector('.mob-menu-close-btn');
const menu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mob-menu-nav-list .menu-link');

openButton.addEventListener('click', () => {
  menu.classList.add('is-open');
});
