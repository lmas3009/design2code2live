const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateX = currentIndex * -100;
    slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds