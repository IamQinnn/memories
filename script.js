// ===== LOGIN PAGE (PIN) =====
const SECRET_PIN = "02102022";

const pinForm = document.getElementById("pinForm");
if (pinForm) {
  pinForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const pin = document.getElementById("pin").value;
    if (pin === SECRET_PIN) {
      window.location.href = "memories.html";
    } else {
      document.getElementById("error").style.display = "block";
    }
  });
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
