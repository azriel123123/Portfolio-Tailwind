const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (window.scrollY >= 250) {
      gsap.to(scrollUpBtn, {
          bottom: '4rem',
          duration: 0.5,
          ease: 'power2.out',
          opacity: 1,
          scale: 1
      });
  } else {
      gsap.to(scrollUpBtn, {
          bottom: '-4rem',
          duration: 0.5,
          ease: 'power2.out',
          opacity: 0,
          scale: 0.8
      });
  }
};

window.addEventListener("scroll", scrollUp);

