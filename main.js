let currentSlide = 0;

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentSlide].classList.remove('active'); // Quitar la clase 'active' del slide actual

    let currentSlide = 0;

function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const infos = document.querySelectorAll('.carousel-info .info');

    images[currentSlide].classList.remove('active');
    infos[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + images.length) % images.length;

    images[currentSlide].classList.add('active');
    infos[currentSlide].classList.add('active');
}



