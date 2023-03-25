// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARDc8QAyq9wabuiZImBS4UNtRkKvk69qA",
  authDomain: "react-authentication-developer.firebaseapp.com",
  projectId: "react-authentication-developer",
  storageBucket: "react-authentication-developer.appspot.com",
  messagingSenderId: "154142660242",
  appId: "1:154142660242:web:8be7a1ff1e5fe2c5c7b84b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export default firebase