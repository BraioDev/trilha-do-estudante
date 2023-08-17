// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM8wtOvQlM5tjfvBmujo-KLkYwQ-Y2LN8",
  authDomain: "trilha-estudante.firebaseapp.com",
  projectId: "trilha-estudante",
  storageBucket: "trilha-estudante.appspot.com",
  messagingSenderId: "826946125756",
  appId: "1:826946125756:web:af2312822b020b287075b9",
  measurementId: "G-53XDEYRVKH"
};

// Initialize Firebase
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);
const firebaseapp = initializeApp(firebaseConfig);

export { db, auth };