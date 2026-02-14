body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  text-align: center;
  min-height: 100vh;
}

.center-box {
  margin-top: 20vh;
  padding: 0 16px;
}

input {
  padding: 12px;
  width: 250px;
  max-width: 100%;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
}

button {
  padding: 12px 25px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  background: #b30059;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #800040;
}

.error {
  color: red;
}

.btn-group {
  margin-top: 30px;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 40px 16px;
}

.start-media img {
  width: 250px;
  max-width: 100%;
  border-radius: 20px;
  cursor: pointer;
}

/* Hearts animation */
.hearts {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 5;
}
.heart {
  position: absolute;
  bottom: -50px;
  width: 24px;
  height: 24px;
  background: red;
  transform: rotate(45deg);
  border-radius: 4px 4px 0 0;
  opacity: 0.9;
  animation: floatUp 6s linear infinite;
}
.heart:before,
.heart:after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background: red;
  border-radius: 50%;
}
.heart:before { top: -12px; left: 0; }
.heart:after { left: 12px; top: 0; }
@keyframes floatUp {
  0% { transform: translateY(0) rotate(45deg); opacity: 1; }
  80% { opacity: 0.8; }
  100% { transform: translateY(-120vh) rotate(45deg); opacity: 0; }
}

/* Typewriter */
.typewriter {
  display: inline-block;
  font-weight: 700;
  font-size: 2.2rem;
  margin: 0 auto;
  border-right: 2px solid rgba(0,0,0,0.15);
  white-space: nowrap;
  overflow: hidden;
  animation: blinkCaret 1s step-end infinite;
}
@keyframes blinkCaret { 50% { border-color: transparent; } }

/* Slideshow (show one at a time) */
.gallery.slideshow {
  display: block;
  max-width: 600px;
  width: 100%;
  margin: 20px auto 0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}
.gallery.slideshow img,
.gallery.slideshow video {
  display: none;
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
}
.gallery.slideshow .active {
  display: block;
  width: 100%;
  border-radius: 15px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 30px;
}

.gallery img,
.gallery video {
  width: 100%;
  border-radius: 15px;
}

.hidden {
  display: none;
}

.letter {
  background: white;
  padding: 25px;
  margin-top: 30px;
  border-radius: 20px;
}

/* Quiz card styling */
.quiz-card {
  background: #ffffff;
  max-width: 720px;
  margin: 8vh auto;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  text-align: left;
}
.quiz-card h1 { text-align: center; margin-top: 0; font-size: 1.6rem; }
.quiz-card #timer { text-align: center; font-weight: 700; margin-bottom: 18px; }
.quiz-card .question { margin-bottom: 14px; }
.quiz-card input[type="text"], .quiz-card input[type="password"] {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
}
.quiz-card button { display: block; margin: 18px auto 0; width: 90%; max-width: 280px; }

/* Mobile Responsive */
@media (max-width: 768px) {
  .center-box { margin-top: 10vh; }
  .typewriter { font-size: 1.8rem; }
  input { width: 100%; max-width: 280px; }
  button { padding: 10px 20px; font-size: 14px; }
  .container { padding: 20px 12px; }
}

@media (max-width: 480px) {
  body { font-size: 14px; }
  .center-box { margin-top: 5vh; padding: 0 12px; }
  h1 { font-size: 1.3rem; }
  .typewriter { font-size: 1.4rem; }
  input { width: 100%; padding: 10px; max-width: 100%; }
  button { margin: 8px 4px; padding: 10px 16px; font-size: 13px; }
  .btn-group { margin-top: 20px; }
  .error { font-size: 12px; }
  .container { padding: 15px 10px; }
  .start-media img { width: 100%; max-width: 280px; }
  
  /* Quiz card mobile */
  .quiz-card { 
    margin: 4vh 12px; 
    padding: 18px 14px; 
    border-radius: 12px;
  }
  .quiz-card h1 { font-size: 1.3rem; margin-bottom: 12px; }
  .quiz-card .question p { font-size: 14px; margin-bottom: 6px; }
  .quiz-card input[type="text"], .quiz-card input[type="password"] { 
    padding: 8px 10px;
    font-size: 14px;
  }
  .quiz-card button { 
    width: calc(100% - 4px);
    margin: 12px 2px 0;
    padding: 10px 12px;
    font-size: 13px;
  }
  
  /* Slideshow mobile */
  .gallery.slideshow { max-width: 100%; }
  .gallery { grid-template-columns: 1fr; }
  
  /* Letter mobile */
  .letter { padding: 18px; margin-top: 20px; }
}

@media (max-width: 320px) {
  h1 { font-size: 1.1rem; }
  button { padding: 8px 12px; font-size: 12px; margin: 6px; }
  input { width: 100%; padding: 8px; }
  .quiz-card { padding: 12px 10px; margin: 2vh 8px; }
}
