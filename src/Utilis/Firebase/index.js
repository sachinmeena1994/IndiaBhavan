import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
export const db = getFirestore(app);

// Food Dish Object
// const foodDish = {
//   name: "Hyderabadi Biryani",
//   description: "A flavorful and aromatic rice dish...",
//   price: 299,
//   category: "Main Course",
//   vegetarian: false,
//   spicyLevel: "Medium",
//   ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Spices"],
//   servingSize: "1 Plate",
//   available: true,
//   images: ["/assets/images/biryani1.jpg", "/assets/images/biryani2.jpg"],
//   preparationTime: "30-40 minutes",
//   ratings: 4.5,
//   reviews: [
//     { userId: "user1", comment: "Delicious!", rating: 5 },
//     { userId: "user2", comment: "Too spicy for me.", rating: 3.5 },
//   ],
// };

// // Add the document
// const addData = async () => {
//   try {
//     await setDoc(doc(db, "Menu", "dish001"), foodDish);
//     console.log("Document added successfully!");
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };
