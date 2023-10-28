// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMNBopgiUuUolMeoduq2yC7h_eJVzrfUk",
  authDomain: "restaurant-c9-3e049.firebaseapp.com",
  projectId: "restaurant-c9-3e049",
  storageBucket: "restaurant-c9-3e049.appspot.com",
  messagingSenderId: "317944363435",
  appId: "1:317944363435:web:8d9eb84f9afdba27673aee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Servicios que estoy ocupando

export const db = getFirestore(app);