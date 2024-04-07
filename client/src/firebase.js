// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-4b0db.firebaseapp.com",
  projectId: "mern-estate-4b0db",
  storageBucket: "mern-estate-4b0db.appspot.com",
  messagingSenderId: "578280946529",
  appId: "1:578280946529:web:3f2d55a03716b84bb42320"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);