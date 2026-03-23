// script.js

// Mouse glow
document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});

// Typing effect
const roles = [
    "Owner - Vessel Esports",
    "Director - Ping Spike",
    "Esports Broadcaster"
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
