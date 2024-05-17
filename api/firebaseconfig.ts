import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqqK6kLqQqsuJF0ijhUEo2b-JnD1XWfto",
  authDomain: "start-firebase-e779a.firebaseapp.com",
  projectId: "start-firebase-e779a",
  storageBucket: "start-firebase-e779a.appspot.com",
  messagingSenderId: "455914197502",
  appId: "1:455914197502:web:424fb66da33e2e13f570af",
};

// Initializing Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
