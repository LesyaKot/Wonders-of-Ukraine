document.querySelectorAll('.gallery-container').forEach((container) => {
  const gallery = container.querySelector('.gallery');
  const leftArrow = container.querySelector('.arrow-left');
  const rightArrow = container.querySelector('.arrow-right');

  const scrollAmount = 375;

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
