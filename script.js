// ============================================================
//  COUNTDOWN LOGIC - LOCKS THE PAGE UNTIL COUNTDOWN ENDS
// ============================================================
// Set your birthday date here (year, month-1, day, hour, minute, second)
const BIRTHDAY_DATE = new Date(2026, 6, 23, 0, 0, 0); // July 23, 2025, 12:00 AM
let countdownTimer = null;

// Add the countdown-active class to body to prevent scrolling
document.body.classList.add('countdown-active');

function updateCountdown() {
  const now = new Date();
  const diff = BIRTHDAY_DATE - now;

  // Get the display elements
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownSection = document.getElementById('countdown-section');

  if (diff <= 0) {
    // 🎉 COUNTDOWN ENDED! Reveal the website
    if (countdownTimer) clearInterval(countdownTimer);
    
    if (countdownSection) {
      // Fade out countdown
      countdownSection.classList.add('finished');
      
      setTimeout(() => {
        // Remove countdown from DOM
        countdownSection.style.display = 'none';
        
        // Remove the lock class
        document.body.classList.remove('countdown-active');
        document.body.classList.add('countdown-done');
        
        // Show the main content
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.style.display = 'block';
        }
        
        // Celebration confetti!
        if (typeof confetti === 'function') {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
          setTimeout(() => {
            confetti({ particleCount: 80, spread: 60, origin: { y: 0.4 } });
          }, 300);
        }
      }, 800);
    }
    return;
  }

  // Calculate time remaining
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Update the display
  if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Start the countdown
countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// ============================================================
//  TEST MODE: Remove this block when you want the real countdown
//  To test the reveal, uncomment the line below:
// ============================================================
// To test immediately, uncomment this:
// setTimeout(() => { BIRTHDAY_DATE = new Date(); }, 100);
// But for real use, keep the BIRTHDAY_DATE as your actual date

// ============================================================
//  OPEN THE CARD
// ============================================================
document.getElementById('open-card').addEventListener('click', function() {
  const cover = document.getElementById('cover');
  const inside = document.getElementById('card-inside');
  
  cover.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  cover.style.opacity = '0';
  cover.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    cover.style.display = 'none';
    inside.style.display = 'block';
    
    // Confetti celebration when opening
    if (typeof confetti === 'function') {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.5 } });
    }
  }, 800);
});

// ============================================================
//  FLOATING HEARTS (Background)
// ============================================================
function createHearts() {
  const container = document.getElementById('hearts-bg');
  if (!container) return;
  
  const emojis = ['❤️', '♥', '💕', '💗', '✨'];
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
    heart.style.animationDuration = (Math.random() * 10 + 12) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(heart);
  }
}
createHearts();

// ============================================================
//  GIFT BOX
// ============================================================
const giftBtn = document.getElementById('gift-btn');
const giftReveal = document.getElementById('gift-reveal');

if (giftBtn) {
  giftBtn.addEventListener('click', function() {
    const box = this.querySelector('.present-box');
    const label = this.querySelector('.gift-label');
    
    // Animate box opening
    box.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    box.style.transform = 'scale(1.2) rotate(-5deg)';
    
    setTimeout(() => {
      box.style.transform = 'scale(0.8) rotate(0deg)';
      box.style.opacity = '0';
      if (label) label.style.opacity = '0';
      
      setTimeout(() => {
        this.style.display = 'none';
        if (giftReveal) {
          giftReveal.style.display = 'block';
          // Confetti for gift opening
          if (typeof confetti === 'function') {
            confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
          }
        }
      }, 400);
    }, 500);
  });
}

// ============================================================
//  20 LOVE REASONS
// ============================================================
const reasonsData = [
  "Your laugh lights up every room",
  "You're always there for everyone",
  "Your kind heart knows no bounds",
  "You give the best advice",
  "Your patience is inspiring",
  "You make every day brighter",
  "Your sense of humor is the best",
  "You're an amazing sister",
  "You care about everyone deeply",
  "Your strength is incredible",
  "You never give up",
  "You remember the little things",
  "Your dreams inspire others",
  "You keep your promises",
  "You're so generous",
  "You make us all feel loved",
  "You're so smart and wise",
  "Your creative spirit shines",
  "You bring peace wherever you go",
  "You're simply YOU — and that's perfect! ❤️"
];

const reasonsGrid = document.getElementById('reasons-grid');

if (reasonsGrid) {
  reasonsData.forEach((reason, index) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
      <div class="reason-inner">
        <div class="reason-front">
          ✦
          <span class="num">#${index + 1}</span>
        </div>
        <div class="reason-back">${reason}</div>
      </div>
    `;
    
    card.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
    
    reasonsGrid.appendChild(card);
  });
}

// ============================================================
//  THE LETTER
// ============================================================
const letterContent = document.getElementById('letter-content');

if (letterContent) {
  letterContent.innerHTML = `
    <p class="greeting">My dearest Samyy Didi,</p>
    <p style="margin-top: 0.8rem;">
      Happy 20th Birthday! 🎂 I can't believe you're twenty already — it feels 
      like just yesterday we were laughing about silly things, and now you're 
      this incredible, strong, beautiful person.
    </p>
    <p style="margin-top: 1rem;">
      I wanted to write you a letter because sometimes, the best things can't 
      be said in a text message. They need to be written down, on paper, 
      so you can hold them close and read them whenever you need to.
    </p>
    <p style="margin-top: 1rem;">
      Thank you for being the amazing person you are. For your kindness, 
      your patience, your endless support. Thank you for the late-night talks, 
      the laughter that made our stomachs hurt, and for just being <em>you</em>.
    </p>
    <p style="margin-top: 1rem;">
      This new decade — your twenties — is going to be <em>so</em> beautiful. 
      I hope it brings you everything you've ever dreamed of and more. 
      You deserve all the happiness in the world.
    </p>
    <p style="margin-top: 1rem;">
      No matter where life takes you, always remember: you are so, so loved.
    </p>
    <p class="signoff" style="margin-top: 1.5rem;">
      with all my love,<br />
      your bacha 😊
    </p>
  `;
}

// ============================================================
//  CELEBRATE BUTTON
// ============================================================
const celebrateBtn = document.getElementById('celebrate-btn');
if (celebrateBtn) {
  celebrateBtn.addEventListener('click', function() {
    if (typeof confetti === 'function') {
      // Big celebration!
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.4 } });
      setTimeout(() => {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
      }, 300);
      setTimeout(() => {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }, 600);
      
      // Add some sparkle effect
      this.textContent = '🎊 Happy Birthday! 🎊';
      this.style.transform = 'scale(1.05)';
      setTimeout(() => {
        this.textContent = '🎉 Let\'s Celebrate! 🎉';
        this.style.transform = 'scale(1)';
      }, 2000);
    }
  });
}

// ============================================================
//  SCROLL REVEAL
// ============================================================
const sections = document.querySelectorAll('.card-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach((section, index) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(section);
});

// ============================================================
//  PAPER TEXTURE
// ============================================================
document.querySelectorAll('.letter-paper, .card-cover, .envelope-bg, .note-paper').forEach(el => {
  el.style.backgroundImage = `
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c0392b' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
  `;
});

console.log('💌 A handmade card, made with love for Samyy Didi ❤️');
console.log('🎂 Countdown active until:', BIRTHDAY_DATE.toLocaleString());
