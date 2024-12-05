document.querySelectorAll('.gallery-container').forEach((container) => {
  const gallery = container.querySelector('.gallery');
  const leftArrow = container.querySelector('.arrow-left');
  const rightArrow = container.querySelector('.arrow-right');

  const scrollAmount = 375;
  // const scrollAmount = 454;

  function updateArrowColors() {
    const scrollLeft = gallery.scrollLeft;
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

    if (scrollLeft > 0) {
      leftArrow.classList.add('active');
    } else {
      leftArrow.classList.remove('active');
    }

    if (scrollLeft < maxScrollLeft) {
      rightArrow.classList.add('active');
    } else {
      rightArrow.classList.remove('active');
    }
  }

  leftArrow.addEventListener('click', () => {
    gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    updateArrowColors();
  });

  rightArrow.addEventListener('click', () => {
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    updateArrowColors();
  });

  updateArrowColors();
});
