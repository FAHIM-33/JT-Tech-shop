// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPEOjDt5diFruyaVGeldW0LAJZ8RHDaZ0",
    authDomain: "techshop-1a254.firebaseapp.com",
    projectId: "techshop-1a254",
    storageBucket: "techshop-1a254.appspot.com",
    messagingSenderId: "804335569490",
    appId: "1:804335569490:web:76c3f8b2e324c978c22d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
