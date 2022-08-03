// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo6vjry3XvXY_KlcrxVXTvwfKLFD9tD0I",
  authDomain: "first-project-22c80.firebaseapp.com",
  projectId: "first-project-22c80",
  storageBucket: "first-project-22c80.appspot.com",
  messagingSenderId: "778584376144",
  appId: "1:778584376144:web:e1e36a0427485b546b2255",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initial Firestore
export const db = getFirestore(app);
export const storage = getStorage(app);
