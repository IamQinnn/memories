// ===== LOGIN PAGE (PIN) =====
 function checkPin() {
  const pinBenar = "1234"; // ubah PIN sesuai keinginanmu
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
