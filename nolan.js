
var audio = document.getElementById("myAudio");
var musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicBtn.innerHTML = "❚❚ Pause"; // Меняем текст на паузу
        musicBtn.style.borderColor = "black"; 
        musicBtn.style.color = "white";
    } else {
        audio.pause();
        musicBtn.innerHTML = "♪ Play"; // Возвращаем название музыки
        musicBtn.style.borderColor = "white"; 
        musicBtn.style.color = "white";
    }
}