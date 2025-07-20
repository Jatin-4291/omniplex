import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBOXA8suOzOFhOrGMtfb6lZ5wajh4Mu014",
  authDomain: "omniplex-7e2b7.firebaseapp.com",
  projectId: "omniplex-7e2b7",
  storageBucket: "omniplex-7e2b7.firebasestorage.app",
  messagingSenderId: "724645984265",
  appId: "1:724645984265:web:6ed5715bb45819dc9f20d8",
  measurementId: "G-WTHYBGHSSW",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
