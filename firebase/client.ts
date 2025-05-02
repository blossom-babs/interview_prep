// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);