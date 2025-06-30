import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE5bXEhnmFznnP26Vrge0Xl-0w_bOpD5w",
  authDomain: "desktop-a0d9d.firebaseapp.com",
  projectId: "desktop-a0d9d",
  storageBucket: "desktop-a0d9d.firebasestorage.app",
  messagingSenderId: "1000947296856",
  appId: "1:1000947296856:web:4f21e44b1880531f4db82d",
  measurementId: "G-V3PEZSRVD7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
