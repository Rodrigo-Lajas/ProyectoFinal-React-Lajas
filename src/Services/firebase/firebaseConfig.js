import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNpF8MxDaat1BQDrCq7eMlFYVddaHRPr8",
    authDomain: "tienda-de-celulares-f1232.firebaseapp.com",
    projectId: "tienda-de-celulares-f1232",
    storageBucket: "tienda-de-celulares-f1232.appspot.com",
    messagingSenderId: "170595257364",
    appId: "1:170595257364:web:3d2e12291099b992fcab01"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)