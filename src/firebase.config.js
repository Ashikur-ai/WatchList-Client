// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6GgBrb08arSXDNGnQYokcz5AXnrA2U30",
    authDomain: "watchlist-8b17d.firebaseapp.com",
    projectId: "watchlist-8b17d",
    storageBucket: "watchlist-8b17d.appspot.com",
    messagingSenderId: "1052412188883",
    appId: "1:1052412188883:web:8dab7252d528ab46561c26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;