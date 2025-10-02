import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// ==== Firebase Config ====
const firebaseConfig = {
  apiKey: "AIzaSyBLYfKZ6EDJ17VhmH2xb_4r-FP7cwE6Gjw",
  authDomain: "memories-about-us.firebaseapp.com",
  projectId: "memories-about-us",
  storageBucket: "memories-about-us.firebasestorage.app",
  messagingSenderId: "482390737279",
  appId: "1:482390737279:web:d566c0583c1e6d96ecda4a",
  measurementId: "G-RT1ZGY742Z"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
