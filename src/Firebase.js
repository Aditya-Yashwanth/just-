import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8w4zePDXgUEFHPvoJh6y5rsrXyQzwxjs",
  authDomain: "justentertain-d9aab.firebaseapp.com",
  projectId: "justentertain-d9aab",
  storageBucket: "justentertain-d9aab.appspot.com",
  messagingSenderId: "753713374136",
  appId: "1:753713374136:web:015a9a47b71ba4c465e54d",
  measurementId: "G-L9FC15MCQF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
