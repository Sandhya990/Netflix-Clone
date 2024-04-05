// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDbn5HVJ_Wq8V2U1mzyF45XJmT0nsWTNZo",
  authDomain: "netflix-react-7b6e0.firebaseapp.com",
  projectId: "netflix-react-7b6e0",
  storageBucket: "netflix-react-7b6e0.appspot.com",
  messagingSenderId: "305727849739",
  appId: "1:305727849739:web:f296244a941b4e933a4e0e",
  measurementId: "G-LC2DTSQL15"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


