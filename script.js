const songs = [
  {
    title: "Acoustic Vibes",
    artist: "Artist One",
    src: "song1.mp3",
    cover: "cover1.png"
  },
  {
    title: "Night Drive",
    artist: "Artist Two",
    src: "song2.mp3",
    cover: "cover2.png"
  },
  {
    title: "Dreams",
    artist: "Artist Three",
    src: "song3.mp3",
    cover: "cover3.png"
  }
];

let currentSong = 0;

const audio = new Audio();

const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

const playlist = document.getElementById("playlist");

function loadSong(index) {
    const song = songs[index];

    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;

    updatePlaylist();
}

function playSong() {
    audio.play();
    playBtn.innerHTML = "⏸";
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = "▶";
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextBtn.addEventListener("click", () => {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    playSong();
});

prevBtn.addEventListener("click", () => {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    playSong();
});

audio.addEventListener("timeupdate", () => {

    progress.max = audio.duration || 0;
    progress.value = audio.currentTime;

    let currentMin = Math.floor(audio.currentTime / 60);
    let currentSec = Math.floor(audio.currentTime % 60);

    let durationMin = Math.floor(audio.duration / 60) || 0;
    let durationSec = Math.floor(audio.duration % 60) || 0;

    currentTime.textContent =
        `${currentMin}:${String(currentSec).padStart(2, "0")}`;

    duration.textContent =
        `${durationMin}:${String(durationSec).padStart(2, "0")}`;
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    playSong();

});

function updatePlaylist() {

    playlist.innerHTML = "";

    songs.forEach((song, index) => {

        const li = document.createElement("li");

        li.textContent = song.title + " - " + song.artist;

        if (index === currentSong) {
            li.style.fontWeight = "bold";
        }

        li.onclick = () => {
            currentSong = index;
            loadSong(currentSong);
            playSong();
        };

        playlist.appendChild(li);

    });

}

loadSong(currentSong);
audio.volume = 0.5;
