// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiXzuzAS_CzLM4xNTTOsKyFwS1TREFdak",
  authDomain: "cheforumreal.firebaseapp.com",
  projectId: "cheforumreal",
  storageBucket: "cheforumreal.appspot.com",
  messagingSenderId: "441077080510",
  appId: "1:441077080510:web:e6a3eae3321969eb7bd9ef",
  measurementId: "G-Y0RK6X1K0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { auth, db, analytics };
