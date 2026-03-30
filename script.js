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
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");

  audio.volume = 1;

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(err => console.log(err));
      btn.textContent = "Pause Music";
    } else {
      audio.pause();
      btn.textContent = "Play Music";
    }
  });
});
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
