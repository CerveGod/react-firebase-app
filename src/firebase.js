import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2ZiPNmn3E-Xk6COdG_KIhiEsvpMnLias",
  authDomain: "poec-alquigym.firebaseapp.com",
  projectId: "poec-alquigym",
  storageBucket: "poec-alquigym.appspot.com",
  messagingSenderId: "1045471715535",
  appId: "1:1045471715535:web:d1f39c0193f6da6ee097ba"
};


export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)