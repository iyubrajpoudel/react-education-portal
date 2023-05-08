// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGGRehGuQplEvGrLzsLns_szajAT8Dxyg",
    authDomain: "education-portal-da01c.firebaseapp.com",
    databaseURL: "https://education-portal-da01c-default-rtdb.firebaseio.com",
    projectId: "education-portal-da01c",
    storageBucket: "education-portal-da01c.appspot.com",
    messagingSenderId: "967509388685",
    appId: "1:967509388685:web:8cbcbc23057bbe67f7a1c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);