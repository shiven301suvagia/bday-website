/* =========================
   COUNTDOWN LOCK SYSTEM
========================= */

// Target Unlock Date: 23 July 2026, 12:00 AM (India)
const UNLOCK_DATE = new Date("2025-07-23T00:00:00+05:30");

function pad(n) {
  return String(n).padStart(2, "0");
}

function unlockSite() {
  document.body.classList.remove("locked");
  document.body.classList.add("unlocked");
}

function startCountdown() {
  const countdownEl = document.getElementById("countdown-screen");

  if (!countdownEl) {
    unlockSite();
    return;
  }

  let timer;

  function update() {
    const now = new Date();
    const diff = UNLOCK_DATE - now;

    if (diff <= 0) {
      unlockSite();
      if (timer) clearInterval(timer);
      return;
    }

    document.body.classList.add("locked");

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = pad(days);
    document.getElementById("hours").textContent = pad(hours);
    document.getElementById("minutes").textContent = pad(minutes);
    document.getElementById("seconds").textContent = pad(seconds);
  }

  update();
  timer = setInterval(update, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);

/* =========================
   STORYBOOK EXPERIENCE
========================= */

const RECIPIENT = "Samyy Didi";

const TIMELINE = [
  { year: "2006", title: "The Beginning", text: "The year you arrived — July 23 — and the world got a little brighter. Mumma still says you smiled before you cried." },
  { year: "2010", title: "Little Explorer", text: "Scraped knees, cartoon marathons, and the fierce big-sister energy that made me feel invincible." },
  { year: "2014", title: "The Reader", text: "You disappeared into books and returned with entire universes to tell me about. I listened to every one." },
  { year: "2018", title: "Teenage Bloom", text: "Late-night talks, borrowed clothes, and the first time I realized you were becoming someone extraordinary." },
  { year: "2021", title: "Finding Your Path", text: "You chose your dreams with a quiet, steady confidence that still teaches me how to be brave." },
  { year: "2024", title: "The Woman You Are", text: "Kind, sharp, hilarious, unstoppable. Anyone lucky enough to know you already knows." },
  { year: "2026", title: "Twenty", text: "Nineteen years complete. The twentieth opens like a door. And I get to watch you walk through it." },
];

const LOVE_CARDS = [
  { front: "One", back: "For always saving me the last piece." },
  { front: "Two", back: "For every 2 AM call answered without a sigh." },
  { front: "Three", back: "For the songs you hum without knowing." },
  { front: "Four", back: "For teaching me how to argue and how to apologize." },
  { front: "Five", back: "For your laugh — the loud, unfiltered one." },
  { front: "Six", back: "For every playlist you built to fix my mood." },
  { front: "Seven", back: "For choosing me even when I was insufferable." },
  { front: "Eight", back: "For the way you say my name when you're proud." },
  { front: "Nine", back: "For hiding my mistakes from Mumma. Legend." },
  { front: "Ten", back: "For being braver than you think you are." },
  { front: "Eleven", back: "For the handwriting that looks like art." },
  { front: "Twelve", back: "For every hug that lasted a little longer." },
  { front: "Thirteen", back: "For teaching me that soft is not weak." },
  { front: "Fourteen", back: "For the birthdays you made feel like festivals." },
  { front: "Fifteen", back: "For loving your friends the way you love your family." },
  { front: "Sixteen", back: "For always leaving the light on." },
  { front: "Seventeen", back: "For dreams big enough to scare the room." },
  { front: "Eighteen", back: "For being the first person I want to tell everything to." },
  { front: "Nineteen", back: "For the future you're building — I can already see it." },
  { front: "Twenty", back: "And for being you. That's the whole reason." },
];

const LETTER = `Samyy Didi,

Twenty. Say it slowly — twen-ty. It sounds like a doorway, doesn't it?

I've watched you become. Not all at once, but in a thousand small, brave decisions. The way you keep going even when you're tired. The way you make room for everyone else's feelings before your own. The way you laugh, still, the same laugh you had when you were seven and I was too small to understand why it was the best sound in the house.

I don't have a gift big enough for the person you are. So I made you this — a little world where the whole point is you. Wander through it. Come back to it. It's yours.

Whatever this year brings, I'm on your side. Loudly. Always.

Happy 20th, didi — the first day of your twentieth year.

With all of it,
Your bacha 😊`;

const STORY_LINES = [
  "Twenty years ago,",
  "the world made room",
  "for someone quietly extraordinary.",
  "This is a small tour",
  "of why we're all so glad it did.",
];

const CONFETTI_COLORS = ["#E8B4B8", "#C9A961", "#F5E6D3", "#8B5A6B", "#F0D78C"];

/* ---------- Scroll Progress Bar ---------- */
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("story-progress");
  if (!progressBar) return;
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
});

/* ---------- Ambient petals & stars ---------- */
function spawnPetals(container, count = 22) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    const size = 8 + Math.random() * 18;
    const hue = Math.random() > 0.5 ? "var(--blush)" : "var(--gold)";
    s.style.left = Math.random() * 100 + "%";
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.background = `radial-gradient(circle at 30% 30%, ${hue}, transparent 70%)`;
    s.style.opacity = String(0.4 + Math.random() * 0.5);
    s.style.animationDelay = `-${Math.random() * 20}s`;
    s.style.animationDuration = `${18 + Math.random() * 22}s`;
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

function spawnStars(container, count = 60) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    const size = 1 + Math.random() * 2.5;
    s.style.top = Math.random() * 100 + "%";
    s.style.left = Math.random() * 100 + "%";
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.animationDelay = Math.random() * 3 + "s";
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

/* ---------- Splash ---------- */
document.getElementById("begin").addEventListener("click", () => {
  document.getElementById("gift").scrollIntoView({ behavior: "smooth" });
});

/* ---------- Gift ---------- */
const giftBox = document.getElementById("gift-box");
const giftCaption = document.getElementById("gift-caption");
const giftMessage = document.getElementById("gift-message");
const tapHint = document.getElementById("tap-hint");
giftBox.addEventListener("click", () => {
  if (giftBox.classList.contains("opened")) return;
  giftBox.classList.add("opened");
  giftCaption.textContent = "made with love";
  tapHint.classList.add("hidden");
  setTimeout(() => giftMessage.classList.add("show"), 400);
  setTimeout(() => {
    if (window.confetti) {
      confetti({
        particleCount: 80, spread: 70, origin: { y: 0.6 },
        colors: ["#E8B4B8", "#C9A961", "#F5E6D3", "#8B5A6B"],
      });
    }
  }, 300);
});

/* ---------- Story lines ---------- */
const storyContainer = document.getElementById("story-lines");
STORY_LINES.forEach((text) => {
  const p = document.createElement("p");
  p.className = "story-line";
  p.textContent = text;
  storyContainer.appendChild(p);
});

/* ---------- Timeline ---------- */
const timelineItems = document.getElementById("timeline-items");
TIMELINE.forEach((item, i) => {
  const row = document.createElement("div");
  row.className = "timeline-row " + (i % 2 === 0 ? "left" : "right");
  row.innerHTML = `
    <div class="dot"></div>
    <div class="timeline-card">
      <p class="yr">${item.year}</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `;
  timelineItems.appendChild(row);
});

/* ---------- Love cards ---------- */
const grid = document.getElementById("cards-grid");
LOVE_CARDS.forEach((card) => {
  const btn = document.createElement("button");
  btn.className = "love-card";
  btn.innerHTML = `
    <div class="love-card-inner">
      <div class="love-face love-front">
        <span class="heart">♥</span>
        <span class="num">${card.front}</span>
      </div>
      <div class="love-face love-back">
        <p>${card.back}</p>
      </div>
    </div>
  `;
  btn.addEventListener("click", () => btn.classList.toggle("flipped"));
  grid.appendChild(btn);
});

/* ---------- Letter ---------- */
const letter = document.getElementById("letter-paper");
const paragraphs = LETTER.split("\n\n");
paragraphs.forEach((text, i) => {
  const p = document.createElement("p");
  if (i === 0) p.className = "greet";
  else if (i === paragraphs.length - 1) p.className = "sign";
  p.textContent = text;
  letter.appendChild(p);
});

/* ---------- Celebration ---------- */
function fireCelebration() {
  if (!window.confetti) return;
  const shoot = (angle, x) =>
    confetti({ particleCount: 60, angle, spread: 70, origin: { x, y: 0.7 }, colors: CONFETTI_COLORS, scalar: 1.1 });
  shoot(60, 0.1);
  shoot(120, 0.9);
  setTimeout(() => shoot(90, 0.5), 300);
  setTimeout(() => {
    confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 }, colors: CONFETTI_COLORS, startVelocity: 45 });
  }, 700);
}
document.getElementById("again").addEventListener("click", fireCelebration);

/* ---------- Ambient setup ---------- */
spawnPetals(document.getElementById("petals"), 22);
spawnStars(document.getElementById("stars-splash"), 80);
spawnStars(document.getElementById("stars-celeb"), 40);

/* ---------- IntersectionObservers ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal, .timeline-card, .love-card").forEach((el) => revealObserver.observe(el));

/* Story lines stagger */
const storyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        [...storyContainer.children].forEach((line, i) => {
          setTimeout(() => line.classList.add("in"), i * 350);
        });
        storyObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);
storyObserver.observe(storyContainer);

/* Celebration auto-fire on scroll into view */
let celebFired = false;
const celebObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !celebFired) {
        celebFired = true;
        fireCelebration();
      }
    });
  },
  { threshold: 0.4 }
);
celebObserver.observe(document.getElementById("celebration"));
