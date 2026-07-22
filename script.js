// ============================================================
//  COUNTDOWN LOGIC - LOCKS THE PAGE UNTIL COUNTDOWN ENDS
// ============================================================
// Set your birthday date here (year, month-1, day, hour, minute, second)
const BIRTHDAY_DATE = new Date(2025, 6, 23, 0, 0, 0); // July 23, 2025, 12:00 AM
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
//  CELEBRATE BUTTON - BIG SURPRISE!
// ============================================================
const celebrateBtn = document.getElementById('celebrate-btn');
let surpriseActive = false;

if (celebrateBtn) {
  celebrateBtn.addEventListener('click', function() {
    if (surpriseActive) return; // Prevent multiple triggers
    surpriseActive = true;
    
    // Change button text
    this.textContent = '🎊 Happy Birthday! 🎊';
    this.style.transform = 'scale(1.1)';
    this.style.background = 'linear-gradient(145deg, #ff6b6b, #c0392b)';
    this.style.color = 'white';
    this.style.boxShadow = '0 8px 40px rgba(192, 57, 43, 0.5)';
    
    // ============================================================
    //  SURPRISE 1: GIANT CONFETTI EXPLOSION
    // ============================================================
    if (typeof confetti === 'function') {
      // Big initial burst
      confetti({ particleCount: 200, spread: 140, origin: { y: 0.3 } });
      
      setTimeout(() => {
        confetti({ particleCount: 150, spread: 120, origin: { y: 0.5 } });
      }, 200);
      
      setTimeout(() => {
        confetti({ particleCount: 100, spread: 100, origin: { y: 0.7 } });
      }, 400);
      
      setTimeout(() => {
        confetti({ particleCount: 80, spread: 80, origin: { y: 0.4 } });
      }, 600);
    }
    
    // ============================================================
    //  SURPRISE 2: FLOATING HEARTS STORM
    // ============================================================
    const heartEmojis = ['❤️', '♥', '💕', '💗', '💖', '💝', '✨', '🌟', '🎂', '🎉', '🎊'];
    const heartContainer = document.createElement('div');
    heartContainer.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
    `;
    document.body.appendChild(heartContainer);
    
    // Create 50 floating hearts
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 3 + 1.5}rem;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0;
        transform: scale(0);
        animation: floatUpSurprise ${Math.random() * 3 + 2}s ease forwards;
        animation-delay: ${Math.random() * 2}s;
        filter: drop-shadow(0 4px 15px rgba(255, 100, 100, 0.3));
      `;
      heartContainer.appendChild(heart);
    }
    
    // Add keyframe animation dynamically
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes floatUpSurprise {
        0% {
          opacity: 0;
          transform: scale(0) translateY(0) rotate(0deg);
        }
        20% {
          opacity: 1;
          transform: scale(1.2) translateY(-20px) rotate(10deg);
        }
        100% {
          opacity: 0;
          transform: scale(0.5) translateY(-200px) rotate(720deg);
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Remove hearts after animation
    setTimeout(() => {
      heartContainer.remove();
      styleSheet.remove();
    }, 6000);
    
    // ============================================================
    //  SURPRISE 3: MAGICAL GLOWING MESSAGE
    // ============================================================
    const surpriseMessage = document.createElement('div');
    surpriseMessage.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: 10000;
      text-align: center;
      font-family: 'Patrick Hand', 'Dancing Script', cursive;
      padding: 40px 50px;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(20px);
      border-radius: 30px;
      border: 3px solid rgba(192, 57, 43, 0.2);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
      max-width: 90%;
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease;
      opacity: 0;
      pointer-events: none;
    `;
    
    surpriseMessage.innerHTML = `
      <div style="font-size: 4rem; margin-bottom: 0.5rem;">🎂</div>
      <p style="font-size: 2.8rem; color: #c0392b; margin-bottom: 0.3rem; font-weight: 700;">
        HAPPY 20TH BIRTHDAY!
      </p>
      <p style="font-size: 2rem; color: #2c1810; font-family: 'Dancing Script', cursive;">
        Samyy Didi ❤️
      </p>
      <div style="margin: 0.8rem 0; font-size: 1.5rem; color: #7a5a4a; opacity: 0.6;">✧ ✧ ✧</div>
      <p style="font-size: 1.2rem; color: #3d2a1e; font-family: 'Quicksand', sans-serif; font-weight: 300; line-height: 1.8;">
        You deserve all the love, happiness, and magic in the world!<br />
        <span style="color: #c0392b; font-weight: 600;">You are so loved!</span>
      </p>
      <button onclick="this.parentElement.remove()" style="
        margin-top: 1.5rem;
        padding: 10px 30px;
        background: #c0392b;
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 1rem;
        font-family: 'Quicksand', sans-serif;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(192, 57, 43, 0.2);
      ">💖 Close</button>
    `;
    
    document.body.appendChild(surpriseMessage);
    
    // Animate in
    setTimeout(() => {
      surpriseMessage.style.transform = 'translate(-50%, -50%) scale(1)';
      surpriseMessage.style.opacity = '1';
      surpriseMessage.style.pointerEvents = 'auto';
    }, 300);
    
    // ============================================================
    //  SURPRISE 4: RAINBOW COLOR EFFECT ON THE BUTTON
    // ============================================================
    let hue = 0;
    const colorInterval = setInterval(() => {
      hue = (hue + 1) % 360;
      this.style.background = `linear-gradient(145deg, hsl(${hue}, 80%, 60%), hsl(${hue + 30}, 80%, 50%))`;
    }, 50);
    
    // Stop color change after 8 seconds
    setTimeout(() => {
      clearInterval(colorInterval);
      this.style.background = 'linear-gradient(145deg, #f4d06f, #e8b84c)';
      this.style.color = '#2c1810';
      this.style.transform = 'scale(1)';
      this.textContent = '🎉 Let\'s Celebrate! 🎉';
      this.style.boxShadow = '0 4px 15px rgba(244, 208, 111, 0.3)';
      surpriseActive = false;
    }, 8000);
  });
}

// ============================================================
//  EXTRA: Add a special effect when the user hovers over the 
//  "Happy Birthday" text in the message
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  // This will create a sparkling trail effect on the surprise message
  const observer = new MutationObserver(() => {
    const msg = document.querySelector('.surprise-message');
    if (msg) {
      // Add sparkle effect to the birthday text
      const title = msg.querySelector('h2');
      if (title) {
        title.style.animation = 'sparkleText 1.5s ease-in-out infinite';
      }
    }
  });
  
  // Watch for the surprise message being added
  observer.observe(document.body, { childList: true, subtree: false });
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
  @keyframes sparkleText {
    0%, 100% { text-shadow: 0 0 10px rgba(255, 200, 100, 0.3); }
    50% { text-shadow: 0 0 30px rgba(255, 200, 100, 0.6), 0 0 60px rgba(255, 200, 100, 0.3); }
  }
`;
document.head.appendChild(sparkleStyle);

console.log('🎉 Surprise ready! Click "Let\'s Celebrate!" for magic! ✨');

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
