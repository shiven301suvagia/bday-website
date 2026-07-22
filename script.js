// Target Unlock Date: 23 July 2026, 12:00 AM (IST / India Standard Time)
const UNLOCK_DATE = new Date("2025-07-23T00:00:00+05:30");

let timer = null;

function updateCountdown() {
  const now = new Date();
  const diff = UNLOCK_DATE - now;

  // If unlock date is reached or passed
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
  
  // Trigger celebration confetti when unlocked
  if (typeof confetti === "function") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Start Timer
timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Gift Unboxing Interactivity
const giftBox = document.getElementById("gift-box");
const giftMsg = document.getElementById("gift-message");
const tapHint = document.getElementById("tap-hint");

if (giftBox) {
  giftBox.addEventListener("click", () => {
    giftBox.style.display = "none";
    if (tapHint) tapHint.style.display = "none";
    if (giftMsg) giftMsg.style.display = "block";
    
    if (typeof confetti === "function") {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  });
}

// Re-trigger confetti on finale button click
const againBtn = document.getElementById("again");
if (againBtn) {
  againBtn.addEventListener("click", () => {
    if (typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 } });
    }
  });
}
