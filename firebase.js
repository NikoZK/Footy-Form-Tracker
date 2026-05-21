// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLwF6jWBlzg-qNaiPCcz5AvbKVOpDbv3w",
  authDomain: "footy-form-tracker.firebaseapp.com",
  projectId: "footy-form-tracker",
  storageBucket: "footy-form-tracker.firebasestorage.app",
  messagingSenderId: "965562751764",
  appId: "1:965562751764:web:926f8f632a33f375e90001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)
export { app, database}