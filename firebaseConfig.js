// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-FdSFa4Jwpw-lvjOoRddxwW5UxpFpFLE",
  authDomain: "fir-matias-d411c.firebaseapp.com",
  projectId: "fir-matias-d411c",
  storageBucket: "fir-matias-d411c.appspot.com",
  messagingSenderId: "711932200818",
  appId: "1:711932200818:web:7038b8d9ca05f486cb3feb",
  measurementId: "G-ZBRCNWRZ9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);