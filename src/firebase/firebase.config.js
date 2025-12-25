// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkjYrgERWauofDeH5OFgsJaq13Dix9YWw",
  authDomain: "navoai-project-60e03.firebaseapp.com",
  projectId: "navoai-project-60e03",
  storageBucket: "navoai-project-60e03.firebasestorage.app",
  messagingSenderId: "640773397982",
  appId: "1:640773397982:web:c81c8d66962856a8d0514f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);