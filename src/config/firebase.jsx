import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtZc-LpvN9RGjqWqcR_hXAHiytKOitgV0",
    authDomain: "chaintechtest.firebaseapp.com",
    projectId: "chaintechtest",
    storageBucket: "chaintechtest.firebasestorage.app",
    messagingSenderId: "1053734392394",
    appId: "1:1053734392394:web:99f211c05c6960f0f1ccb3",
    measurementId: "G-3THHHT5L9K"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
export default app;


export { auth, db, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, doc, setDoc, getDoc };
