// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIR8h86M5I2z8lD60Ph2wIbC6R5-1VuTk",
  authDomain: "travel-bd-9c86f.firebaseapp.com",
  projectId: "travel-bd-9c86f",
  storageBucket: "travel-bd-9c86f.appspot.com",
  messagingSenderId: "948489615269",
  appId: "1:948489615269:web:bbcf5ad785c536e0ec1a4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
