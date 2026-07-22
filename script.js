// Target Unlock Date: 23 July 2026, 12:00 AM (IST / India Standard Time)
const UNLOCK_DATE = new Date("2025-07-23T00:00:00+05:30");

let timer = null;

function updateCountdown() {
  const now = new Date();
  const diff = UNLOCK_DATE - now;

  if (diff <= 0) {
    unlockSite();
    if (timer) clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / (1000 * 60)) % 10);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function unlockSite() {
  document.body.classList.remove("locked");
  document.body.classList.add("unlocked");
  
  if (typeof confetti === "function") {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
}

// Start Timer
timer = setInterval(updateCountdown, 1000);
updateCountdown();

/* --- Dynamic Content Population --- */

// 1. Floating Petals
function createPetals() {
  const container = document.getElementById("petals");
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.width = Math.random() * 12 + 8 + "px";
    petal.style.height = Math.random() * 15 + 10 + "px";
    petal.style.animationDuration = Math.random() * 5 + 7 + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(petal);
  }
}
createPetals();

// 2. Storyteller Lines
const storyText = [
  "Twenty years ago, a quiet light entered the world.",
  "Through every chapter, you've brought warmth, grace, and an unforgettable smile.",
  "You hold a special place in the hearts of everyone around you.",
  "And today, we celebrate all that you are—and all the wonderful moments still to come."
];

const storyContainer = document.getElementById("story-lines");
if (storyContainer) {
  storyText.forEach((text) => {
    const p = document.createElement("p");
    p.className = "story-line";
    p.textContent = text;
    storyContainer.appendChild(p);
  });
}

// 3. Memory Timeline
const timelineData = [
  { year: "2006", title: "The Beginning", desc: "A brand new story began." },
  { year: "2012", title: "Growing Up", desc: "Filling days with curiosity and laughter." },
  { year: "2018", title: "Milestones", desc: "Stepping gracefully into new adventures." },
  { year: "2026", title: "To Twenty", desc: "Entering a golden new decade full of promise." }
];

const timelineContainer = document.getElementById("timeline-items");
if (timelineContainer) {
  timelineData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `
      <div class="timeline-card glass-card">
        <div class="timeline-year">${item.year}</div>
        <h3 class="serif cream" style="font-size:1.2rem">${item.title}</h3>
        <p class="cream-70" style="font-size:0.9rem">${item.desc}</p>
      </div>
    `;
    timelineContainer.appendChild(div);
  });
}

// 4. 20 Love Cards
const cardsData = [
  "Your beautiful laughter", "Always being supportive", "Your warm heart",
  "The best advice provider", "Your patience and grace", "Your cheerful energy",
  "Making every day brighter", "Your wonderful sense of humor", "Being an amazing sister",
  "Your kindness to everyone", "Your endless strength", "Unforgettable memories",
  "Your inspiring dreams", "Always keeping promises", "Your generous spirit",
  "Making us feel loved", "Your brilliant mind", "Your artistic touch",
  "Bringing peace everywhere", "Simply being YOU! ♥"
];

const cardsGrid = document.getElementById("cards-grid");
if (cardsGrid) {
  cardsData.forEach((note, index) => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <span class="gold-text serif" style="font-size:1.3rem">Reason #${index + 1}</span>
        </div>
        <div class="card-back">
          <span>${note}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
    cardsGrid.appendChild(card);
  });
}

// 5. Letter Paper Text
const letterPaper = document.getElementById("letter-paper");
if (letterPaper) {
  letterPaper.innerHTML = `
    <p class="serif cream" style="margin-bottom:1rem">Dear Samyy Didi,</p>
    <p class="cream-70" style="margin-bottom:1rem">
      Happy 20th Birthday! Turning twenty is such a wonderful milestone. Watching you grow, achieve, and shine brighter each year has been a true joy.
    </p>
    <p class="cream-70" style="margin-bottom:1rem">
      Thank you for all the laughter, the little moments, and for always being such a wonderful person. I hope this new decade brings you endless success, health, and happiness.
    </p>
    <p class="script gold-text" style="font-size:1.8rem; text-align:right">— Always, your bacha 😊</p>
  `;
}

// 6. Interactive Actions & Scroll Animations
const giftBox = document.getElementById("gift-box");
const giftMsg = document.getElementById("gift-message");
const tapHint = document.getElementById("tap-hint");

if (giftBox) {
  giftBox.addEventListener("click", () => {
    giftBox.style.display = "none";
    if (tapHint) tapHint.style.display = "none";
    if (giftMsg) giftMsg.style.display = "block";
    
    if (typeof confetti === "function") {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    }
  });
}

const beginBtn = document.getElementById("begin");
if (beginBtn) {
  beginBtn.addEventListener("click", () => {
    document.getElementById("gift").scrollIntoView({ behavior: "smooth" });
  });
}

const againBtn = document.getElementById("again");
if (againBtn) {
  againBtn.addEventListener("click", () => {
    if (typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
    }
  });
}

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      
      // Animate story lines if story section enters
      if (entry.target.id === "story") {
        const lines = entry.target.querySelectorAll(".story-line");
        lines.forEach((line, idx) => {
          setTimeout(() => {
            line.classList.add("show");
          }, idx * 400);
        });
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .scene").forEach(el => observer.observe(el));
