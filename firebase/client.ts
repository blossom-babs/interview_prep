import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyANzCv7OOOd85GPe_m37x-QXShoAX_upK8",
  authDomain: "interview-preply.firebaseapp.com",
  projectId: "interview-preply",
  storageBucket: "interview-preply.firebasestorage.app",
  messagingSenderId: "888765092483",
  appId: "1:888765092483:web:d53838c222ea1d6489c1b6",
  measurementId: "G-W9VK64GEPD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)