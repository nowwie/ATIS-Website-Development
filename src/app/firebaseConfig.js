import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF4fw6f-8HAKfduC1XPnNDLY8gI60m3bg",
  authDomain: "yogyakarta-atis-website.firebaseapp.com",
  projectId: "yogyakarta-atis-website",
  storageBucket: "yogyakarta-atis-website.appspot.com",
  messagingSenderId: "909278945594",
  appId: "1:909278945594:web:b70ba9a84e991a2c5e3003",
  measurementId: "G-WX21G9PB2V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};