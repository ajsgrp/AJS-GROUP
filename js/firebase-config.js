// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyqlq6QAj90t8ekDctp0DIL5H-iRUDbFQ",
  authDomain: "ajs-group-84d2c.firebaseapp.com",
  projectId: "ajs-group-84d2c",
  storageBucket: "ajs-group-84d2c.firebasestorage.app",
  messagingSenderId: "258567998868",
  appId: "1:258567998868:web:6a7c4ef4f49eab8cebbd381",
  measurementId: "G-065H64W2DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Export Database
export { db };