// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx9-Ao2MxXcG14IhW-MwpfiEtBFdccu-c",
  authDomain: "expense-tracker-afd8c.firebaseapp.com",
  projectId: "expense-tracker-afd8c",
  storageBucket: "expense-tracker-afd8c.appspot.com",
  messagingSenderId: "483680817887",
  appId: "1:483680817887:web:50dd8677793b893ceb4f6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
