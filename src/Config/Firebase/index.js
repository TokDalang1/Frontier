// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEaFkRmJ8z3OFiKBqDGN6NsP8919eP_LQ",
  authDomain: "frontier-class2024.firebaseapp.com",
  databaseURL: "https://frontier-class2024-default-rtdb.firebaseio.com",
  projectId: "frontier-class2024",
  storageBucket: "frontier-class2024.firebasestorage.app",
  messagingSenderId: "551627953394",
  appId: "1:551627953394:web:019a8abc1a5a2fb126ec6b",
  measurementId: "G-XGSG3SPYZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
