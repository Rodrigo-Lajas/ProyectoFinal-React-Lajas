// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBewJFVodhVnuiDOj44cK_mzn2Hw47Sx8g",
  authDomain: "tienda-de-telefonos-movi-4cecb.firebaseapp.com",
  projectId: "tienda-de-telefonos-movi-4cecb",
  storageBucket: "tienda-de-telefonos-movi-4cecb.appspot.com",
  messagingSenderId: "508161183668",
  appId: "1:508161183668:web:8d875a8e06773916862ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }