// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3j_uQXfUN3N5sLOPNRu99S5Cr0E5v3_o",
  authDomain: "navkis-cie-calculator-login.firebaseapp.com",
  projectId: "navkis-cie-calculator-login",
  storageBucket: "navkis-cie-calculator-login.firebasestorage.app",
  messagingSenderId: "444879136790",
  appId: "1:444879136790:web:a0c3f80ff55f022cbe2d37",
  measurementId: "G-JX08S5XVQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);