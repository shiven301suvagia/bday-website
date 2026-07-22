:root {
  --plum-deep: #0e0814;
  --plum-card: rgba(26, 16, 38, 0.75);
  --border-glass: rgba(244, 208, 111, 0.2);
  --gold-glow: #f4d06f;
  --gold-gradient: linear-gradient(135deg, #ffe082 0%, #ca9e50 100%);
  --cream: #fcefe6;
  --cream-70: rgba(252, 239, 230, 0.75);
  --blush: #e8a5b8;
  --rose: #f48fb1;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', sans-serif;
  --font-script: 'Dancing Script', cursive;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  background-color: var(--plum-deep);
  background-image: radial-gradient(circle at 50% 20%, #1a0e28 0%, #0e0814 80%);
  background-attachment: fixed;
  color: var(--cream);
  font-family: var(--font-sans);
  scroll-behavior: smooth;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Glassmorphism Styling */
.glass-card {
  background: var(--plum-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-glass);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  padding: 2.5rem;
}

/* Typography & Colors */
.serif { font-family: var(--font-serif); }
.script { font-family: var(--font-script); }
.big-script { font-size: 2.2rem; }
.gold-gradient {
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gold-text { color: var(--gold-glow); }
.blush { color: var(--blush); }
.rose { color: var(--rose); }
.cream-70 { color: var(--cream-70); }

.chapter-tag {
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold-glow);
  margin-bottom: 0.75rem;
  display: block;
}

/* Scroll Reveals */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* State Handlers for Locked / Unlocked */
body.locked .stage { display: none !important; }
body.locked #countdown-screen { display: flex !important; }
body.unlocked #countdown-screen { display: none !important; }
body.unlocked .stage { display: block !important; }

/* Countdown Lock Screen */
.countdown-screen {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
}

.countdown-card {
  max-width: 480px;
  width: 100%;
  text-align: center;
}

.countdown-title {
  font-family: var(--font-serif);
  font-size: 2.8rem;
  margin: 0.5rem 0 1.5rem 0;
  font-weight: 400;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.time-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-glass);
  border-radius: 12px;
  padding: 0.75rem 0.25rem;
}

.time-box span {
  display: block;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--gold-glow);
}

.time-box small {
  font-size: 0.7rem;
  color: var(--cream-70);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.gift-from-bacha {
  font-family: var(--font-script);
  font-size: 1.6rem;
  color: var(--blush);
  margin-bottom: 0.5rem;
}

.countdown-note {
  font-size: 0.85rem;
  color: var(--cream-70);
}

/* Main Stage */
.stage {
  max-width: 850px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  position: relative;
}

.scene {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 0;
  position: relative;
}

.hero-name {
  font-family: var(--font-serif);
  font-size: 4.5rem;
  margin: 0.5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #e0c3fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Petals Floating Effect */
.petals {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.petal {
  position: absolute;
  background: radial-gradient(circle, rgba(244,143,177,0.6) 0%, rgba(232,165,184,0.2) 70%);
  border-radius: 150% 0 150% 0;
  animation: floatPetal 10s infinite linear;
}

@keyframes floatPetal {
  0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
}

/* Gift Box Animation */
.gift-box-wrap {
  margin: 2rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gift-box {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 120px;
  height: 120px;
  transition: transform 0.3s ease;
}

.gift-box:hover {
  transform: scale(1.08);
}

.box-body {
  width: 100px;
  height: 80px;
  background: linear-gradient(135deg, #8e24aa, #4a148c);
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}

.box-ribbon {
  width: 20px;
  height: 80px;
  background: var(--gold-glow);
  position: absolute;
  bottom: 0;
  left: 50px;
}

.box-lid {
  width: 110px;
  height: 25px;
  background: linear-gradient(135deg, #ab47bc, #6a1b9a);
  border-radius: 6px;
  position: absolute;
  top: 20px;
  left: 5px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.tap-hint {
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: var(--gold-glow);
  margin-top: 1rem;
}

/* Story Lines */
.story-inner {
  width: 100%;
  max-width: 650px;
  text-align: left;
}

.story-line {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  color: var(--cream);
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease;
}

.story-line.show {
  opacity: 1;
  transform: translateY(0);
}

/* Timeline */
.timeline-wrap {
  position: relative;
  margin-top: 3rem;
  width: 100%;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-glass);
  transform: translateX(-50%);
}

.timeline-item {
  margin: 2rem 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 50%;
}

.timeline-item:nth-child(even) {
  margin-left: 50%;
  justify-content: flex-start;
}

.timeline-card {
  width: 85%;
  padding: 1.5rem;
  text-align: left;
}

.timeline-year {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--gold-glow);
  margin-bottom: 0.3rem;
}

/* Cards Grid (20 Notes) */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  width: 100%;
  margin-top: 2.5rem;
}

.note-card {
  perspective: 1000px;
  height: 160px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.note-card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
}

.card-front {
  background: var(--plum-card);
  border: 1px solid var(--border-glass);
}

.card-back {
  background: rgba(244, 208, 111, 0.12);
  border: 1px solid var(--gold-glow);
  transform: rotateY(180deg);
  font-family: var(--font-serif);
  font-size: 1.1rem;
  line-height: 1.4;
  color: var(--cream);
}

/* Letter Paper */
.letter-paper {
  position: relative;
  max-width: 650px;
  width: 100%;
  margin-top: 2rem;
  text-align: left;
  line-height: 1.9;
  font-family: var(--font-serif);
  font-size: 1.3rem;
}

/* Buttons */
.btn-primary, .btn-outline {
  padding: 0.85rem 2rem;
  border-radius: 30px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.btn-primary {
  background: var(--gold-gradient);
  border: none;
  color: #000;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(244, 208, 111, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(244, 208, 111, 0.5);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--gold-glow);
  color: var(--gold-glow);
}

.btn-outline:hover {
  background: rgba(244, 208, 111, 0.15);
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
  .hero-name { font-size: 3.2rem; }
  .timeline-line { left: 20px; }
  .timeline-item, .timeline-item:nth-child(even) {
    width: 100%;
    margin-left: 0;
    padding-left: 45px;
  }
  .timeline-card { width: 100%; }
}
