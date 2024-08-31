import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);