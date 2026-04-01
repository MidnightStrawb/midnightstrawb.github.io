// SIDEBAR TOGGLE (HANDLE ONLY)
const infoHandle = document.getElementById('info-handle');
const infoSidebar = document.getElementById('info-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

infoHandle.addEventListener('click', () => {
    infoSidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
});

// optional: clicking overlay also closes
sidebarOverlay.addEventListener('click', () => {
    infoSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Mouse glow
// document.addEventListener("mousemove", (e) => {
//    document.body.style.setProperty('--x', e.clientX + 'px');
//    document.body.style.setProperty('--y', e.clientY + 'px');
//});

// AUDIOOOO
const audio = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

audio.volume = 0.4;

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "❚❚";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

// UPDATE PROGRESS
audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";

    // time formatting
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
});

// CLICK TO SEEK
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

// FORMAT TIME
function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

//document.addEventListener("DOMContentLoaded", () => {
//  const audio = document.getElementById("bg-music");
//  const btn = document.getElementById("music-toggle");
//
//  audio.volume = 1;
//
//  btn.addEventListener("click", () => {
//    if (audio.paused) {
//      audio.play().catch(err => console.log(err));
//      btn.textContent = "Pause Music";
//    } else {
//      audio.pause();
//      btn.textContent = "Play Music";
//    }
//  });
//});
// Typing effect that wont fucking work
const roles = [
    "Owner - Vessel Esports",
    "Director - Ping Spike",
    "Esports Producer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    const el = document.getElementById("roles");

    if (!el) return; // prevents errors on other pages

    if (i < roles.length) {
        if (!isDeleting && j <= roles[i].length) {
            current = roles[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = roles[i].substring(0, j--);
        }

        el.textContent = current;

        if (j === roles[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }

    setTimeout(type, isDeleting ? 40 : 80);
}

type();
