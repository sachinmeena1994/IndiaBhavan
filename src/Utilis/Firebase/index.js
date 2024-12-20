import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDawufL5IilaKdtDTJkFDJHC9OS9RH_Mok",
  authDomain: "indiabhavan-d7dd5.firebaseapp.com",
  projectId: "indiabhavan-d7dd5",
  storageBucket: "indiabhavan-d7dd5.firebasestorage.app",
  messagingSenderId: "320366183707",
  appId: "1:320366183707:web:ab5e30ccda0de6c41c7fbe",
  measurementId: "G-TFY6MTJK10",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase initialized:", app);
