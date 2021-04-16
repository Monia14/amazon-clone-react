import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBps4yNLGflC6iNoZfGRmWNr5iUcyA4iaU",
  authDomain: "clone-11f8d.firebaseapp.com",
  projectId: "clone-11f8d",
  storageBucket: "clone-11f8d.appspot.com",
  messagingSenderId: "591201898286",
  appId: "1:591201898286:web:529a570eb66106cd4ef4bf",
  measurementId: "G-FE8YF5MXSF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
