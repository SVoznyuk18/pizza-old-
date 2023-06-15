import { initializeApp } from 'firebase/app';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  query,
  where,
  getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  // apiKey: "AIzaSyDz34Ldsq52QQQWjpMIRmEhp7BlANe26sE",
  // authDomain: "vozniuk-pizza.firebaseapp.com",
  // projectId: "vozniuk-pizza",
  // storageBucket: "vozniuk-pizza.appspot.com",
  // messagingSenderId: "493155731486",
  // appId: "1:493155731486:web:c02f096d9290a76e83860f",

};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const createNewDocument = async (dataBase, collectionName, documentName, data) => {
  await setDoc(doc(dataBase, collectionName, documentName), data);
};

export const getDocuments = async (dataBase, collectionName) => {
  let documents = [];
  const querySnapshot = await getDocs(collection(dataBase, collectionName));

  querySnapshot.forEach((document) => {
    documents = [...documents, document.data()];
  });

  return documents;
};

// eslint-disable-next-line consistent-return
export const getDocument = async (dataBase, collectionName, documentId) => {
  try {
    const docRef = doc(dataBase, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
  } catch {
    return 'errror';
  }
};

export const deleteUser = async (dataBase, collectionName, id) => {
  await deleteDoc(doc(dataBase, collectionName, id));
};

export const login = async (dataBase, collectionName, email, password) => {
  let user = {};
  const citiesRef = collection(dataBase, collectionName);
  const q = query(citiesRef, where('email', '==', email), where('password', '==', password));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((document) => {
    user = { ...user, ...document.data() };
  });

  return user;
};
