import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { Platform } from "react-native"
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLwF6jWBlzg-qNaiPCcz5AvbKVOpDbv3w",
  authDomain: "footy-form-tracker.firebaseapp.com",
  projectId: "footy-form-tracker",
  storageBucket: "footy-form-tracker.firebasestorage.app",
  messagingSenderId: "965562751764",
  appId: "1:965562751764:web:926f8f632a33f375e90001"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

// On web we use getAuth, on phones we use AsyncStorage so the login is remembered
let auth
if (Platform.OS === "web") {
  auth = getAuth(app)
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  })
}

export { app, database, auth }