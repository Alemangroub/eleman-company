// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// NOTE: Please double-check the apiKey value, it seems incomplete.
const firebaseConfig = {
  apiKey: "AIzaSyAIPUR1qFzLbNi---_qDQa11fpIB6yRyFo",
  authDomain: "elemancompany-2b00c.firebaseapp.com",
  databaseURL: "https://elemancompany-2b00c-default-rtdb.firebaseio.com",
  projectId: "elemancompany-2b00c",
  storageBucket: "elemancompany-2b00c.appspot.com",
  messagingSenderId: "842755919578",
  appId: "1:842755919578:web:0423c8f54f46ea3e6f5fe3",
  measurementId: "G-QF3C2TBTBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database service
export const db = getDatabase(app);

// Export the initialized app (optional, but good practice)
export default app;
