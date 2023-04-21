
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDz34Ldsq52QQQWjpMIRmEhp7BlANe26sE",
    authDomain: "vozniuk-pizza.firebaseapp.com",
    projectId: "vozniuk-pizza",
    storageBucket: "vozniuk-pizza.appspot.com",
    messagingSenderId: "493155731486",
    appId: "1:493155731486:web:c02f096d9290a76e83860f",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  
  export const db = getFirestore(app);
