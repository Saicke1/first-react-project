// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqhJuQHZxuy5mEUyzZzVB_575zrzfgERU",
  authDomain: "first-react-project-ac4c2.firebaseapp.com",
  projectId: "first-react-project-ac4c2",
  storageBucket: "first-react-project-ac4c2.appspot.com",
  messagingSenderId: "527847910252",
  appId: "1:527847910252:web:25d03471698b7cb514a149",
  measurementId: "G-X60ZP8N8YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export const auth = getAuth(app);
