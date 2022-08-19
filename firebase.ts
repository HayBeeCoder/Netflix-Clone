// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfZtSv5LUfQH5DgUBGbX8DYwPj5jwKxZg",
  authDomain: "netflix-clone-a7b9e.firebaseapp.com",
  projectId: "netflix-clone-a7b9e",
  storageBucket: "netflix-clone-a7b9e.appspot.com",
  messagingSenderId: "981229706837",
  appId: "1:981229706837:web:6a622b2fbb8fa7e15efedc",
  measurementId: "G-HNK5SDNCTP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {db , auth}