// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnifDA9Z2GePZSPcCCm2YDCzLLShrb7EA",
    authDomain: "tutoring-web-8b132.firebaseapp.com",
    projectId: "tutoring-web-8b132",
    storageBucket: "tutoring-web-8b132.appspot.com",
    messagingSenderId: "670356209510",
    appId: "1:670356209510:web:944ac8f3350838e52ed2a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);