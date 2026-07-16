// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdNL5htucywaXjqQLELgm1e0XyQZ3eZcY",
  authDomain: "gaming-store-af916.firebaseapp.com",
  projectId: "gaming-store-af916",
  storageBucket: "gaming-store-af916.firebasestorage.app",
  messagingSenderId: "442282544445",
  appId: "1:442282544445:web:b7fb63b2fe64473cbb8954",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
