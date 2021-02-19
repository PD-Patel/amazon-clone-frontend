// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyATTAIQiFZEm7BKoEI8Lyrm9wRy1gPcTcQ",
  authDomain: "clone-c649d.firebaseapp.com",
  projectId: "clone-c649d",
  storageBucket: "clone-c649d.appspot.com",
  messagingSenderId: "756634228254",
  appId: "1:756634228254:web:a831b7177ff4542f09400f",
  measurementId: "G-8B8Y34NP58",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
