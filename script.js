// ==== Firebase Config ====
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ==== Elements ====
const authModal = document.getElementById("authModal");
const mainContent = document.getElementById("mainContent");
const loginBtn = document.getElementById("loginBtn");
const demoBtn = document.getElementById("demoBtn");
const logoutBtn = document.getElementById("logoutBtn");
const heartBtn = document.getElementById("heartBtn");
const heartContainer = document.getElementById("heartContainer");

let currentUser = null;

// ==== Login Only ====
loginBtn.onclick = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass).catch(err => {
    alert("Login gagal: " + err.message);
  });
};

// Demo Mode (tanpa login Firebase)
demoBtn.onclick = () => {
  authModal.style.display = "none";
  mainContent.classList.remove("hidden");
};

// Logout
logoutBtn.onclick = () => auth.signOut();

// ==== Auth State ====
auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    authModal.style.display = "none";
    mainContent.classList.remove("hidden");
    loadData();
  } else {
    currentUser = null;
    mainContent.classList.add("hidden");
    authModal.style.display = "flex";
  }
});

// ==== Heart Animation ====
heartBtn.onclick = () => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 80 + "%";
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
};

// ==== Firestore Data Functions ====
function loadData() {
  if (!currentUser) return;
  const userDoc = db.collection("users").doc(currentUser.uid);
  userDoc.onSnapshot(doc => {
    if (doc.exists) {
      console.log("User data:", doc.data());
    } else {
      userDoc.set({ posts: [], notes: [], gallery: [] });
    }
  });
}
