// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtv6k4WdcYv6erOXfeBmPu1OaJwR_cEQg",
  authDomain: "netflix-gpt-33537.firebaseapp.com",
  projectId: "netflix-gpt-33537",
  storageBucket: "netflix-gpt-33537.appspot.com",
  messagingSenderId: "660184977156",
  appId: "1:660184977156:web:003495810baf03cd144a51",
  measurementId: "G-5DD60RXLDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
