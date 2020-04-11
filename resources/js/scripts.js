document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');
    hero.style.height = `${window.innerHeight}px`;
    new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });
});

