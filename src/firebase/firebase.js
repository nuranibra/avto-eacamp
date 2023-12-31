// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxbpe4V6LiAtSq6tayri3RO1VuxlGgurU",
  authDomain: "testcar-fd3a6.firebaseapp.com",
  projectId: "testcar-fd3a6",
  storageBucket: "testcar-fd3a6.appspot.com",
  messagingSenderId: "541177071982",
  appId: "1:541177071982:web:c586a1a1f9f72f7f15597f",
  measurementId: "G-PNC5ZC91WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);