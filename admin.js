import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyqlq6QAj90t8ekDctp0DIL5H-iRUDbFQ",
  authDomain: "ajs-group-84d2c.firebaseapp.com",
  projectId: "ajs-group-84d2c",
  storageBucket: "ajs-group-84d2c.firebasestorage.app",
  messagingSenderId: "258567998868",
  appId: "1:258567998868:web:6a7c4ef4f49eab8cebbd381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
document.getElementById("admin-login-form").addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("admin-email").value;
    const password = document.getElementById("admin-password").value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Welcome Admin!");

        window.location.href = "admin-dashboard.html";

    } catch (error) {

        alert("Login Failed!\n\n" + error.message);

    }

});