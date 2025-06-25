
export function initSlideProjects() {
  let carouselState = {
    active: false,
    currentIndex: 0,
    slide: null,
    items: null,
    prevButton: null,
    nextButton: null,
    next: null,
    prev: null,
  };

  function setupCarousel() {
    const slide = document.querySelector('#projects .slide');
    const prevButton = document.querySelector('#projects .arrow-nav .prev');
    const nextButton = document.querySelector('#projects .arrow-nav .next');

    if (!slide || !prevButton || !nextButton) return;

    carouselState.slide = slide;
    carouselState.items = slide.children;
    carouselState.prevButton = prevButton;
    carouselState.nextButton = nextButton;

    const mediaQuery = window.matchMedia('(max-width: 814px)');

    function handleScreenChange(event) {
      if (event.matches) {
        activateCarousel();
      } else {
        deactivateCarousel();
      }
    }

    mediaQuery.addEventListener('change', handleScreenChange);

    handleScreenChange(mediaQuery);
  }

  function goToSlide(index) {
    const itemsCount = carouselState.items.length;
    if (index < 0) {
      index = itemsCount - 1;
    } else if (index >= itemsCount) {
      index = 0;
    }

    let lessWidth = 0;
    if (window.innerWidth > 500) {
      lessWidth = 120; // Adjust this value as needed for larger screens
    }

    const offset = -index * (carouselState.totalSlideWidth - lessWidth);
    carouselState.slide.style.transform = `translateX(${offset}px)`;
    carouselState.currentIndex = index;
  }


  function activateCarousel() {
    if (carouselState.active) return;
    carouselState.active = true;

    carouselState.recalculate = () => {
      if (!carouselState.items || carouselState.items.length === 0) return;

      const cardWidth = carouselState.items[0].offsetWidth;
      const gap = parseFloat(getComputedStyle(carouselState.slide).gap) || 0;

      carouselState.totalSlideWidth = cardWidth + gap;

      goToSlide(carouselState.currentIndex);
    };

    carouselState.next = () => goToSlide(carouselState.currentIndex + 1);
    carouselState.prev = () => goToSlide(carouselState.currentIndex - 1);

    carouselState.nextButton.addEventListener('click', carouselState.next);
    carouselState.prevButton.addEventListener('click', carouselState.prev);

    window.addEventListener('resize', carouselState.recalculate);

    carouselState.recalculate();
  }


  function deactivateCarousel() {
    if (!carouselState.active) return;
    carouselState.active = false;

    carouselState.nextButton.removeEventListener('click', carouselState.next);
    carouselState.prevButton.removeEventListener('click', carouselState.prev);

    window.removeEventListener('resize', carouselState.recalculate);

    carouselState.slide.style.transform = 'translateX(0)';
    carouselState.currentIndex = 0;
    carouselState.totalSlideWidth = 0;

    carouselState.next = null;
    carouselState.prev = null;
    carouselState.recalculate = null;
  }

  setupCarousel();
}
