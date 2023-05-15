// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRGTwnCcCrmS1vcmHfJ8K-sF6Ff988Zlk",
  authDomain: "ema-john-simple-2462e.firebaseapp.com",
  projectId: "ema-john-simple-2462e",
  storageBucket: "ema-john-simple-2462e.appspot.com",
  messagingSenderId: "267580053884",
  appId: "1:267580053884:web:0b0666982b9128f1b46cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}