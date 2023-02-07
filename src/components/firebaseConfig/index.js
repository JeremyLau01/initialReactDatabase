//import firebase from 'firebase/mpat/app';

import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";

// storage for photos
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


import { getDatabase, ref, get } from "firebase/database";
// new stuff

//below is a component StartFirebase
function StartFirebase(){
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBguKSVkUsqXgA8O8yVIc8JD5oE5j2K0mY",
    authDomain: "fir-react-f6e9f.firebaseapp.com",
    databaseURL: "https://fir-react-f6e9f-default-rtdb.firebaseio.com",
    projectId: "fir-react-f6e9f",
    storageBucket: "fir-react-f6e9f.appspot.com",
    messagingSenderId: "825488524785",
    appId: "1:825488524785:web:147ba763acb5a0dd07f050"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  return getDatabase(app);
}

// storage for images - redundant rn bc of current setup with database
const firebaseConfig = {
  apiKey: "AIzaSyBguKSVkUsqXgA8O8yVIc8JD5oE5j2K0mY",
  authDomain: "fir-react-f6e9f.firebaseapp.com",
  databaseURL: "https://fir-react-f6e9f-default-rtdb.firebaseio.com",
  projectId: "fir-react-f6e9f",
  storageBucket: "fir-react-f6e9f.appspot.com",
  messagingSenderId: "825488524785",
  appId: "1:825488524785:web:147ba763acb5a0dd07f050"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // export...?

// testing database fetch --> app.js
const db = getFirestore(app);
export { db };

export default StartFirebase;
