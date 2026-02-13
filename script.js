// LOGIN
function login() {
  const petName = document.getElementById("petName").value.trim();
  const error = document.getElementById("errorMsg");

  if (petName.toLowerCase() === "mama") {
    window.location.href = "valentine.html";
  } else {
    error.textContent = "Wrong pet name 😢";
  }
}

// NO BUTTON GROW 😈
let scale = 1;
function growNo() {
  scale += 0.4;
  document.getElementById("yesBtn").style.transform = `scale(${scale})`;
}

// YES BUTTON
function goToLove() {
  window.location.href = "love.html";
}

// START MEDIA
function startMedia() {
  document.getElementById("gallery").classList.remove("hidden");
  document.getElementById("bgMusic").play();
}

// TYPEWRITER (title)
document.addEventListener('DOMContentLoaded', () => {
  const h = document.querySelector('.typewriter');
  if (h) {
    const text = h.getAttribute('data-text') || h.textContent;
    h.textContent = '';
    let i = 0;
    const speed = 80;
    function type() {
      if (i <= text.length) {
        h.textContent = text.slice(0, i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
});

// HEARTS
let heartInterval;
function startHearts() {
  if (heartInterval) return;
  const container = document.querySelector('.hearts');
  heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const size = Math.random() * 24 + 12;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.background = `hsl(${Math.random() * 20 + 330},90%,60%)`;
    heart.style.animationDuration = (5 + Math.random() * 4) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
  }, 500);
}

// SLIDESHOW
let slideIndex = 0;
let slideTimer;
function startSlideshow() {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;
  gallery.classList.add('slideshow');
  const items = Array.from(gallery.querySelectorAll('img, video'));
  if (!items.length) return;
  function show(index) {
    items.forEach((it, i) => {
      it.classList.toggle('active', i === index);
      if (it.tagName === 'VIDEO') {
        if (i === index) it.currentTime = 0;
        if (i === index) it.play().catch(()=>{});
        else it.pause();
      }
    });
  }
  show(slideIndex);
  slideTimer = setInterval(() => {
    slideIndex = (slideIndex + 1) % items.length;
    show(slideIndex);
  }, 3500);
}

// Update startMedia to also start hearts and slideshow
const originalStart = startMedia;
function startMedia() {
  document.getElementById("gallery").classList.remove("hidden");
  const bg = document.getElementById("bgMusic");
  if (bg && bg.tagName === 'AUDIO') bg.play().catch(()=>{});
  startHearts();
  startSlideshow();
}

// QUIZ CHECK
function checkQuiz() {
  const a1 = document.getElementById("q1").value.toLowerCase();
  const a2 = document.getElementById("q2").value.toLowerCase();
  const a3 = document.getElementById("q3").value.toLowerCase();
  const a4 = document.getElementById("q4").value.toLowerCase();

  if (a1 === "black" &&
      a2 === "church" &&
      a3 === "ella" &&
      a4 === "mama") {
        window.location.href = "love.html";
  } else {
        alert("You got something wrong 😏 Try again");
  }
}

// TIMER (1 minute)
let time = 60; // 1 minute in seconds
const timer = setInterval(() => {
  if (document.getElementById("timer")) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById("timer").innerText =
      `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      document.getElementById("quizForm").classList.add("hidden");
      document.getElementById("passcodeSection").classList.remove("hidden");
    }
  }
}, 1000);

// PASSCODE
function checkPasscode() {
  const passcode = document.getElementById("passcode").value;
  if (passcode === "1234") {
    window.location.href = "love.html";
  } else {
    alert("Wrong passcode 😈");
  }
}

function backToQuiz() {
  document.getElementById("quizForm").classList.remove("hidden");
  document.getElementById("passcodeSection").classList.add("hidden");
  // Reload the page to reset timer and form
  location.reload();
}