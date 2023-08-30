// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import {  getStorage  } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8zv9RH-Aetxl7cfm1wxmVLIYYUuqohu4",
  authDomain: "trilhadoestudante-23b83.firebaseapp.com",
  projectId: "trilhadoestudante-23b83",
  storageBucket: "trilhadoestudante-23b83.appspot.com",
  messagingSenderId: "113199600295",
  appId: "1:113199600295:web:2101ee3dac696589108182",
  measurementId: "G-S76DRY10EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export { db , auth, analytics, storage};