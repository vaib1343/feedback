import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBV9ruHtYSf_Hsp2gwATHG8IIK7ErqexIo",
  authDomain: "feedback-app-f8909.firebaseapp.com",
  projectId: "feedback-app-f8909",
  storageBucket: "feedback-app-f8909.appspot.com",
  messagingSenderId: "722791176157",
  appId: "1:722791176157:web:fb48b1d65f85e0ef550834",
  measurementId: "G-VS5G90N4ZV"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);