// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH2Fs-_zDs1kIgNS7h3AKbAQ5qrAr5ghc",
  authDomain: "contacts-55068.firebaseapp.com",
  projectId: "contacts-55068",
  storageBucket: "contacts-55068.firebasestorage.app",
  messagingSenderId: "157471069290",
  appId: "1:157471069290:web:c2a772e1176cf54a7de613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);