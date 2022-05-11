import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtZsZGmkA0tL0tB29os2c-exqGXoGiImY",
    authDomain: "linkedin-64369.firebaseapp.com",
    projectId: "linkedin-64369",
    storageBucket: "linkedin-64369.appspot.com",
    messagingSenderId: "569013277500",
    appId: "1:569013277500:web:9c917483ee9c70f5460439"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {db, auth, createUserWithEmailAndPassword, updateProfile};
