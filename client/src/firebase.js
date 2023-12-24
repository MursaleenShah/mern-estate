// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c4ee3.firebaseapp.com",
  projectId: "mern-estate-c4ee3",
  storageBucket: "mern-estate-c4ee3.appspot.com",
  messagingSenderId: "490311989314",
  appId: "1:490311989314:web:8857d9c761cdc77e1955db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);