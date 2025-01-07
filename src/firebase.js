import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAOkn_2hK-Z1yWX6Xz9koSAsvz7Z6a06E",
  authDomain: "demoproject-1f866.firebaseapp.com",
  databaseURL: "https://demoproject-1f866.firebaseio.com",
  projectId: "demoproject-1f866",
  storageBucket: "demoproject-1f866.appspot.com",
  messagingSenderId: "331647175493",
  appId: "1:331647175493:web:26d39ae652b450ed434c2c",
  measurementId: "G-GLW4GT8Q8Y",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
