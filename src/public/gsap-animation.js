let tl = gsap.timeline();

// Initial loading screen background animation with enhanced effects
tl.to('#loading div', {
    scale: 1.5,
    rotation: 180,
    backgroundColor: '#ff6347',
    duration: 1.5,
    ease: "power2.inOut"
})
.to('#loading div', {
    scale: 0.8,
    rotation: -180,
    backgroundColor: '#4CAF50',
    duration: 1.5,
    ease: "power2.inOut"
}, '+=0.2')
.to('#loading div', {
    scale: 1.2,
    rotation: 360,
    backgroundColor: '#1E90FF',
    duration: 1.5,
    ease: "power2.inOut"
}, '+=0.2')
.to('#loading', {
    opacity: 0,
    duration: 1.5,
    y: '-100%',
    ease: "power2.inOut",
    delay: 0.5
})
.to('#loading', {
    zIndex: -1,
    duration: 0
});

// Adding entrance animations for the main content with more dynamic effects
tl.from('nav', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
    backgroundColor: '#282c34',
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    filter: "grayscale(1)",
    delay: 0.5
}, '-=0.5')
.to('nav', {
    filter: "none",
    duration: 0.5,
    delay: 0.2
})
.from('.absolute.top-1/3', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.3,
    background: "linear-gradient(45deg, #ff7300, #eaeaea)"
}, '-=0.8')
.from('.relative img', {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "elastic.out(1, 0.3)",
    rotation: 360,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    filter: "blur(10px)",
    delay: 0.2
}, '-=1')
.to('.relative img', {
    filter: "none",
    duration: 0.5,
    delay: 0.2
})
.from('.hidden.lg\\:flex.flex-col', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3
}, '-=1')

// Trailer Section Enhancements
.from('.trailer-container', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.3,
    background: "linear-gradient(90deg, #ff7e5f, #feb47b)"
}, '-=1')
.from('.trailer h1', {
    opacity: 0,
    scale: 1.1,
    y: -20,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
    stagger: 0.2
}, '-=1')
.from('.trailer p', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    delay: 0.5
}, '-=1')
.from('.trailer .cta-button', {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "bounce.out",
    delay: 0.5
}, '-=0.8')

// Further enhance with additional effects
.to('.background', {
    scale: 1.02,
    duration: 1.5,
    ease: "power2.inOut"
}, '-=1')
.from('.footer', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
}, '-=0.8');

// Additional Layer for Extra Detail
tl.from('.extra-detail', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.2
}, '-=0.8')
.from('.header-icons', {
    opacity: 0,
    scale: 0.5,
    rotation: 45,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.3
}, '-=0.6')
.to('.main-container', {
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    duration: 1.5,
    ease: "power2.inOut"
}, '-=1.2')
.from('.footer', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
}, '-=0.8');

gsap.fromTo('.trailer-background', {
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    clipPath: 'circle(0% at 50% 50%)'
}, {
    clipPath: 'circle(75% at 50% 50%)',
    duration: 3,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
});

gsap.to('.trailer-background', {
    backgroundPosition: '200% center',
    duration: 6,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
});

