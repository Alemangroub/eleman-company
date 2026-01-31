// src/lib/firebase/client.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration.
// This is safe to expose on the client side.
const firebaseConfig = {
  apiKey: "AIzaSyAIPUR1qFzLbNi---_qDQa11fpIB6yRyFo",
  authDomain: "elemancompany-2b00c.firebaseapp.com",
  projectId: "elemancompany-2b00c",
  storageBucket: "elemancompany-2b00c.appspot.com",
  messagingSenderId: "842755919578",
  appId: "1:842755919578:web:0423c8f54f46ea3e6f5fe3",
  measurementId: "G-QF3C2TBTBS"
};

// Initialize Firebase for the client, only if it hasn't been initialized yet.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
