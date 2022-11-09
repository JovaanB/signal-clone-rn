import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLnRbWYwtGkgTQ_uM9clHHUSI-GU6Itmk",
  authDomain: "enigma-chat-a84db.firebaseapp.com",
  projectId: "enigma-chat-a84db",
  storageBucket: "enigma-chat-a84db.appspot.com",
  messagingSenderId: "202349936792",
  appId: "1:202349936792:web:b3ec0860779e52820b90ed",
};

let app;
if (!getApps().length) app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  addDoc,
  db,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
};
