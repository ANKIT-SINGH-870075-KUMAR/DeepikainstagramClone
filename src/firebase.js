import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd0zIUDPJEhQdbSFo5UX49TUyqAWiqkzU",
  authDomain: "ankit-instagramclone.firebaseapp.com",
  projectId: "ankit-instagramclone",
  storageBucket: "ankit-instagramclone.appspot.com",
  messagingSenderId: "86093281212",
  appId: "1:86093281212:web:8f9f0cdac1a0cdcb29ddb9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();