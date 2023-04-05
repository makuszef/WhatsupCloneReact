import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJKmMZ-GnWA0WG6WUvLdHeLWfR0oNwCbU",
  authDomain: "whatsupclone-5a189.firebaseapp.com",
  databaseURL: "https://whatsupclone-5a189.firebaseio.com",
  projectId: "whatsupclone-5a189",
  storageBucket: "whatsupclone-5a189.appspot.com",
  messagingSenderId: "165036010761",
  appId: "1:165036010761:web:c3cf8018a58197d1e577d8",
  measurementId: "G-0P9E556V2Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
