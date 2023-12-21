// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVaIIVBEH7rsKx5Xn3JynYLIplVheGPMc",
  authDomain: "self-taskr.firebaseapp.com",
  projectId: "self-taskr",
  storageBucket: "self-taskr.appspot.com",
  messagingSenderId: "728032007066",
  appId: "1:728032007066:web:94c73da4e1b8456c6d2023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
