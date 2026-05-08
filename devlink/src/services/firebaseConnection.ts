import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC21ASiNynRDsYqyolirWJB7mHm_LpR-zo",
  authDomain: "reactlinks-32925.firebaseapp.com",
  projectId: "reactlinks-32925",
  storageBucket: "reactlinks-32925.firebasestorage.app",
  messagingSenderId: "419494610515",
  appId: "1:419494610515:web:b8521847ff9c461bad68a6",
  measurementId: "G-VHB8PFCVPP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };