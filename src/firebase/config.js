import { initializeApp } from "firebase/app";

const API_KEY = process.env.REACT_APP_API_KEY

const firebaseConfig = {
  apiKey: API_KEY,
  databaseURL: "https://nannies-service-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: "nannies-service.firebaseapp.com",
  projectId: "nannies-service",
  storageBucket: "nannies-service.appspot.com",
  messagingSenderId: "860572154693",
  appId: "1:860572154693:web:d339c60ab779aa92fbdc2c"
};

export const app = initializeApp(firebaseConfig);

