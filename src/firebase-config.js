// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYK9ri1-MV_vR3PZ2cL1JnrjGRzI1HsBs",
  authDomain: "blog-eliia.firebaseapp.com",
  projectId: "blog-eliia",
  storageBucket: "blog-eliia.appspot.com",
  messagingSenderId: "637158467686",
  appId: "1:637158467686:web:328d8dd3652cbd2ef5a5a7",
  measurementId: "G-K1SHTH66RT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
