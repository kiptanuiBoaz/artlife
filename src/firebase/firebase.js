// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAINfsOgIQklBfOsf_NUfvcf5eMUC68K34",
  authDomain: "artlife-files.firebaseapp.com",
  projectId: "artlife-files",
  storageBucket: "artlife-files.appspot.com",
  messagingSenderId: "1030597188109",
  appId: "1:1030597188109:web:76bf246b6dd72e2f8b9344",
  measurementId: "G-1TQCQFPRKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 