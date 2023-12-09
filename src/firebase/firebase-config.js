
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6EC6b00Bf-CjEYUnonOO3kqXv6uyUCFY",
  authDomain: "nennies-ff67e.firebaseapp.com",
  projectId: "nennies-ff67e",
  storageBucket: "nennies-ff67e.appspot.com",
  messagingSenderId: "439343703938",
  appId: "1:439343703938:web:db2bd47a693c3128dd919b",
  measurementId: "G-64T9EJLXFS"
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);