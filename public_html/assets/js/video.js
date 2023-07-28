src = "https://www.youtube.com/iframe_api"

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'zy1RZGchXiY',
        playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
        },
        events: {

        }
    });
}


// Pobieramy wszystkie elementy portfolio
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Dodajemy nasłuchiwanie kliknięcia do każdego elementu portfolio
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Przełączamy klasę 'clicked' na klikniętym elemencie
        item.classList.toggle('clicked');

        // Usuwamy klasę 'clicked' z innych elementów portfolio
        portfolioItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('clicked')) {
                otherItem.classList.remove('clicked');
            }
        });
    });
});