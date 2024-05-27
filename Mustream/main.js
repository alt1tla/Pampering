const songsList = [
    {
        name: "The diner",
        artist: "Billie Eilish",
        src: "static/the_diner.mp3",
        cover: "static/billie.png"
    },
    {
        name: "Lunch",
        artist: "Billie Eilish",
        src: "static/lunch.mp3",
        cover: "static/billie.png"
    },
    {
        name: "L'amour de ma vie",
        artist: "Billie Eilish",
        src: "static/l_amour_de_ma_vie.mp3",
        cover: "static/billie.png"
    },
    {
        name: "Chihiro",
        artist: "Billie Eilish",
        src: "static/chihiro.mp3",
        cover: "static/billie.png"
    },
    {
        name: "A-YO",
        artist: "Lady Gaga",
        src: "static/a-yo.mp3",
        cover: "static/ladygaga.jpg"
    },
    {
        name: "Angel Down",
        artist: "Lady Gaga",
        src: "static/chihiro.mp3",
        cover: "static/ladygaga.jpg"
    },
    {
        name: "John Wayne",
        artist: "Lady Gaga",
        src: "static/john_wayne.mp3",
        cover: "static/ladygaga.jpg"
    },
    {
        name: "Dancin' in circles",
        artist: "Lady Gaga",
        src: "static/dancin'_in_circles.mp3",
        cover: "static/ladygaga.jpg"
    }
]

const artistName = document.querySelector('.artist-name');
const songName = document.querySelector('.song-name');
const progressBar = document.querySelector('.progress');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('.time');
const timeCurrent = document.querySelector('.time-current');
const timeDuration = document.querySelector('.time-duration');
const cover = document.querySelector('.cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    song.addEventListener('canplay',currentDuration);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    playBtn.addEventListener('click', togglePlayPause);
    nextBtn.addEventListener('click', nextSong);
    progressBar.addEventListener('click', seek);
});

function loadSong(index) {
    const { name, artist, src, cover: pic } = songsList[index];
    artistName.innerText = artist;
    songName.innerText = name;
    song.src = src;
    cover.style.backgroundImage = `url(${pic})`;
}

function currentDuration(){
    if (song.duration){
        const duration = formatTime(song.duration);
        timeDuration.innerHTML = `${duration}`;
    }
}

function updateProgress() {
    if (song.duration) {
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        const currentTime = formatTime(song.currentTime);
        timeCurrent.innerText = `${currentTime}`;
    }
}

function formatTime(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

function togglePlayPause() {
    if (playing) {
        song.pause();
    } else {
        song.play();
    }
    playing = !playing;
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);
    cover.classList.toggle("active", playing);
}

function nextSong() {
    currentSong = (currentSong + 1) % songsList.length;
    playMusic();
}

function prevSong() {
    currentSong = (currentSong - 1 + songsList.length) % songsList.length;
    playMusic();
}

function playMusic() {
    loadSong(currentSong);
    song.play();
    playing = true;
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    cover.classList.add("active");
}

function seek(e) {
    const pos = (e.offsetX / progressBar.clientWidth) * song.duration;
    song.currentTime = pos;
}