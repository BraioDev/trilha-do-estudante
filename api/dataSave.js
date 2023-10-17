const { getFirestore, collection, addDoc } = require('firebase/firestore');
const { getApps, initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const express = require('express');
const appe = express();

var firebaseConfig = {
    apiKey: "AIzaSyC8zv9RH-Aetxl7cfm1wxmVLIYYUuqohu4",
    authDomain: "trilhadoestudante-23b83.firebaseapp.com",
    projectId: "trilhadoestudante-23b83",
    storageBucket: "trilhadoestudante-23b83.appspot.com",
    messagingSenderId: "113199600295",
    appId: "1:113199600295:web:2101ee3dac696589108182",
    measurementId: "G-S76DRY10EH"
};

appe.use(express.json());
appe.use(express.urlencoded({ extended: false }));
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
var auth = getAuth(firebaseApp);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function dataSave(dataToSave) {
    try {
        await addDoc(collection(db, 'informacoes'), dataToSave);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = dataSave;