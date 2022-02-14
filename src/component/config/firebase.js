// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrhPlfC-55O-p7za9vMWaO-J5gfZ321Qk",
  authDomain: "faizan-malik.firebaseapp.com",
  databaseURL: "https://faizan-malik-default-rtdb.firebaseio.com",
  projectId: "faizan-malik",
  storageBucket: "faizan-malik.appspot.com",
  messagingSenderId: "712932566471",
  appId: "1:712932566471:web:3964703d3c4c2866caa5e2",
  measurementId: "G-3L07HP9C9S"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
