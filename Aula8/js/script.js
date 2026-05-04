let currentPosition = 0
const track = document.getElementById('track')
const containerWidth = document.querySelector(".carrosselWrapper").offsetWidth

function moveSlide(direction) {
    const cardWidth = document.querySelector('.card').offsetWidth + 30; // Largura + Gap
    const maxScroll = track.offsetWidth - containerWidth;

    currentPosition += direction * cardWidth * -1;

    // Impede que o carrossel vá além do início
    if (currentPosition > 0) {
        currentPosition = 0;
    }

    // Impede que o carrossel vá além do fim
    if (Math.abs(currentPosition) > maxScroll) {
        currentPosition = -maxScroll;
    }

    track.style.transform = `translateX(${currentPosition}px)`;
}