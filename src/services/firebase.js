// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdwDLIeEaCrSGOIKPz1Uet7X-ogJfjgI8",
  authDomain: "finance-game-hackathon.firebaseapp.com",
  projectId: "finance-game-hackathon",
  storageBucket: "finance-game-hackathon.firebasestorage.app",
  messagingSenderId: "694825267376",
  appId: "1:694825267376:web:3ecd4ac82dae41611b4b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);