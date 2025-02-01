import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDjAxEBTVb3dpH9JjtKxQ7vXADrydUMaCA",
  authDomain: "ecommerce-66b9e.firebaseapp.com",
  projectId: "ecommerce-66b9e",
  storageBucket: "ecommerce-66b9e.appspot.com",
  messagingSenderId: "268697585386",
  appId: "1:268697585386:web:fbaf027705e00f61d7f993",
  measurementId: "G-7ZVD2Y5GVH",
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);
