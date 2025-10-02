// ===== LOGIN PAGE (PIN) =====
 function checkPin() {
      const pinBenar = "02102022";
      const pinInput = document.getElementById("pin").value;

      if (pinInput === pinBenar) {
        window.location.href = "memories.html";
      } else {
        alert("Pin Salah Sayang😒 coba lagi yaaa");
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
