// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWeLwR4hpxy9sRIrsBgWFlN0XhJD1DoQ8",
  authDomain: "sign-in-app-cf6cd.firebaseapp.com",
  projectId: "sign-in-app-cf6cd",
  storageBucket: "sign-in-app-cf6cd.firebasestorage.app",
  messagingSenderId: "792801904635",
  appId: "1:792801904635:web:168a6b98cd775bfccbed5e",
  measurementId: "G-EG7770J2K7"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;