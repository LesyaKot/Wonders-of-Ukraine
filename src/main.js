document.querySelectorAll('.gallery-container').forEach(container => {
  const gallery = container.querySelector('.gallery');
  const leftArrow = container.querySelector('.arrow-left');
  const rightArrow = container.querySelector('.arrow-right');

  const scrollAmount = 768;

  function updateArrowColors() {
    const scrollLeft = gallery.scrollLeft;
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

    leftArrow.classList.toggle('active', scrollLeft > 0);
    rightArrow.classList.toggle('active', scrollLeft < maxScrollLeft);
  }

  leftArrow.addEventListener('click', () => {
    gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrowColors, 300);
  });

  rightArrow.addEventListener('click', () => {
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrowColors, 300);
  });

  updateArrowColors();
});

const form = document.getElementById('travelForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  form.reset();
  alert('Thank you! Your application has been sent.');
});

// відкриття та закриття кнопок модалки

const button = document.querySelector('.mobile-menu-btn');
const closeButton = document.querySelector('.mob-menu-close-btn');
const menu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mob-menu-nav-list .menu-link');

button.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('is-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    menu.classList.remove('is-open');

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
