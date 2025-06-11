export function scrollToSection(element, duration = 300) {
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

export function initSmoothScrollMenu(selector = '.nav-links a', options = {}) {
  const links = document.querySelectorAll(selector);

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      scrollToSection(targetSection, options.duration);

      // Fecha menu mobile se especificado
      if (options.menuCheckboxId) {
        const menuCheckbox = document.getElementById(options.menuCheckboxId);
        if (menuCheckbox && menuCheckbox.checked) {
          menuCheckbox.checked = false;
        }
      }
    });
  });
}

export function initScrollToTop(buttonSelector, duration = 300) {
  const button = document.querySelector(buttonSelector);
  if (!button) return;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(document.body, duration);
  });
}
