import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBFnqUwSQ9oQ9Lj_IZCkJpprWqYCWdSw3k",
  authDomain: "todo-app-99eef.firebaseapp.com",
  projectId: "todo-app-99eef",
  storageBucket: "todo-app-99eef.appspot.com",
  messagingSenderId: "379124594195",
  appId: "1:379124594195:web:19a66f26bbac2f911571e6",
  measurementId: "G-HY5HNJB0W4",
});

const db = getFirestore(firebaseApp);

export default db;
