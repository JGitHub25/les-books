import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMMAwhYWQ0EzVSqhfCuWjrO7gGTQ-V4jk",
  authDomain: "les-books.firebaseapp.com",
  projectId: "les-books",
  storageBucket: "les-books.appspot.com",
  messagingSenderId: "882773824480",
  appId: "1:882773824480:web:684dbb8901de160df31185",
  measurementId: "G-TXL78QY3JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

// testing
async function getWishlists(db: any) {
  const wishlistsCol = collection(db, "wishlists");
  const wishListSnapshot = await getDocs(wishlistsCol);
  const wishlistList = wishListSnapshot.docs.map((doc) => doc.data());
  console.log(wishlistList);
  return wishlistList;
}
getWishlists(db);
