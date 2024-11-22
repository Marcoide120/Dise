// Selección del audio y el botón
const audio = document.getElementById('audio');
const muteButton = document.getElementById('muteButton');

// Evento para alternar el silencio del audio
muteButton.addEventListener('click', () => {
    if (audio.muted) {
    audio.muted = false;
    muteButton.textContent = '🔊'; // Cambiar ícono a sonido
    } else {
    audio.muted = true;
    muteButton.textContent = '🔇'; // Cambiar ícono a silencio
    }
});

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
