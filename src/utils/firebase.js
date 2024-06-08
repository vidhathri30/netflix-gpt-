// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuUPHt2RFMzPtyhFwOEC1ihoFdhtYunx8",
  authDomain: "netflix-gpt-b0cee.firebaseapp.com",
  projectId: "netflix-gpt-b0cee",
  storageBucket: "netflix-gpt-b0cee.appspot.com",
  messagingSenderId: "142500984953",
  appId: "1:142500984953:web:7c4f79910f2ed639aafca8",
  measurementId: "G-4VNT5RQCE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
