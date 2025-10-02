// ===== LOGIN PAGE (PIN) =====
 function checkPin() {
  const pinBenar = "02102022"; // ubah PIN sesuai keinginanmu
  const pinInput = document.getElementById("pin").value;

  if (pinInput === pinBenar) {
    window.location.href = "memories.html"; 
  } else {
    alert("PIN salah sayang 😘 coba lagi ya 💕");
  }
}

// ===== NAVIGASI TAB =====
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // reset
    tabs.forEach(btn => btn.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // aktifkan tab terpilih
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// ===== MUSIK LATAR =====
const music = document.getElementById("bgMusic");
const musicControl = document.getElementById("musicControl");

if (music && musicControl) {
  musicControl.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicControl.textContent = "⏸ Pause Music";
    } else {
      music.pause();
      musicControl.textContent = "▶️ Play Music";
    }
  });
}

// Membuat love jatuh-jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.textContent = "💞";
  heart.textContent = "🤍";

  // posisi horizontal acak
  heart.style.left = Math.random() * window.innerWidth + "px";

  // ukuran acak
  const size = Math.random() * 20 + 15; 
  heart.style.fontSize = size + "px";

  // durasi jatuh acak
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);

  // hapus setelah selesai
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// interval untuk memunculkan hati
setInterval(createHeart, 500);
