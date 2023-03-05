// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZl63eq6DIUOCmcOQ7EA3iNkm8QLgnh8k",
    authDomain: "react-chat-54e0c.firebaseapp.com",
    projectId: "react-chat-54e0c",
    storageBucket: "react-chat-54e0c.appspot.com",
    messagingSenderId: "718119268937",
    appId: "1:718119268937:web:c03f7609e6898638030598",
    measurementId: "G-VND05VKL70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);