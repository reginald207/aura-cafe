(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----- Preloader -----
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader && preloader.classList.add('hidden');
    }, 1600);
  });

  // ----- Smooth scroll (Lenis) -----
  let lenis;
  if (!prefersReduced && typeof Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    document.documentElement.classList.add('has-lenis');
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof gsap !== 'undefined' && gsap.ticker) {
      gsap.ticker.add((time) => lenis.raf(time * 1000));
    }
  }

  // Anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(target, { offset: -20 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  // ----- GSAP scroll reveals -----
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced) {
      gsap.set('.reveal', { opacity: 1, y: 0 });
    } else {
      document.querySelectorAll('.reveal').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: (i % 4) * 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      });

      // Hero parallax
      const heroMedia = document.querySelector('[data-parallax]');
      if (heroMedia) {
        gsap.to(heroMedia, {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: heroMedia.closest('.hero'),
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }
  }

  // ----- Magnetic buttons -----
  if (!prefersReduced && !window.matchMedia('(hover: none), (pointer: coarse)').matches) {
    document.querySelectorAll('.magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }
})();
