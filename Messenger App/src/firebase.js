import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAKknLLa931WPR596WA-8z0vY47A_Oa2rw",
  authDomain: "chat-c4b75.firebaseapp.com",
  projectId: "chat-c4b75",
  storageBucket: "chat-c4b75.appspot.com",
  messagingSenderId: "168543710734",
  appId: "1:168543710734:web:437462e7377ece5b23965f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();