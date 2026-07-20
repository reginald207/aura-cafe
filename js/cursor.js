(function () {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function loop() {
    curX += (mouseX - curX) * 0.18;
    curY += (mouseY - curY) * 0.18;
    cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('img, .gallery-item, .drink-card__media').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--view');
      cursor.textContent = 'View';
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--view');
      cursor.textContent = '';
    });
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      if (!cursor.classList.contains('cursor--view')) cursor.classList.add('cursor--btn');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--btn');
    });
  });
})();
