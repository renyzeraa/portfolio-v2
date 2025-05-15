export function initBackToTop() {
  const button = document.getElementById('scrollToTopButton');
  if (!button) return;

  function checkScroll() {
    const scrolled = window.scrollY;
    if (scrolled > 120) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  }

  window.addEventListener('scroll', checkScroll);
  document.addEventListener('DOMContentLoaded', checkScroll);
}
