(function () {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const overlay = document.getElementById('navOverlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  });

  if (burger && overlay) {
    burger.addEventListener('click', () => {
      overlay.classList.toggle('is-open');
    });

    overlay.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        overlay.classList.remove('is-open');
      });
    });
  }
})();
