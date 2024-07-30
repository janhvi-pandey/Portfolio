// src/firebase-config.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGkpDogZ4Y-kUhHNYCd5NRVqNDd-rWw88",
  authDomain: "portfolio-janhvi.firebaseapp.com",
  projectId: "portfolio-janhvi",
  storageBucket: "portfolio-janhvi.appspot.com",
  messagingSenderId: "810809965569",
  appId: "1:810809965569:web:5d0d706606b98b29385400",
  measurementId: "G-S62XYJKZDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
