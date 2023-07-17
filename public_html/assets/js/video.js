src = "https://www.youtube.com/iframe_api"

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'zy1RZGchXiY',
        playerVars: {
            autoplay: 0,
            controls: 1, // Opcjonalnie: wyświetlanie kontrolki odtwarzacza
            modestbranding: 1,
        },
        events: {

        }
    });
}