import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSWI_U9MboWbHGF6oNHbpvnjUa-3eJlkc",
  authDomain: "assignment5-d7ccf.firebaseapp.com",
  projectId: "assignment5-d7ccf",
  storageBucket: "assignment5-d7ccf.firebasestorage.app",
  messagingSenderId: "792081625542",
  appId: "1:792081625542:web:82a1ad5daa0dd7db9982c7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);