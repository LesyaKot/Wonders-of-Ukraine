closeButton.addEventListener('click', () => {
  menu.classList.remove('is-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});
