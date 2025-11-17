import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaJBZ6LsqY3OtObpLDsma28I6LqkdKVBU",
  authDomain: "learning-supp-fb-app-tm-notyet.firebaseapp.com",
  databaseURL: "https://learning-supp-fb-app-tm-notyet-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learning-supp-fb-app-tm-notyet",
  storageBucket: "learning-supp-fb-app-tm-notyet.firebasestorage.app",
  messagingSenderId: "898659674927",
  appId: "1:898659674927:web:5686ba8c93ef99d44c4fda"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

