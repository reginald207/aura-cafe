(function () {
  const track = document.getElementById('galleryTrack');
  if (!track || typeof gsap === 'undefined') return;

  window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    const setDistance = () => track.scrollWidth - window.innerWidth + 80;

    gsap.to(track, {
      x: () => -setDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: track.closest('.gallery-wrap'),
        start: 'top top+=100',
        end: () => '+=' + setDistance(),
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  });
})();
