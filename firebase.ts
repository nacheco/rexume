// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEmWzWgtuU3OU1KtxwLmXjNrnRCOUThK0",
  authDomain: "rexume-app.firebaseapp.com",
  projectId: "rexume-app",
  storageBucket: "rexume-app.appspot.com",
  messagingSenderId: "959785805003",
  appId: "1:959785805003:web:8305f0912ff69fedc6a74e",
  measurementId: "G-JSHM3Z1R6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);