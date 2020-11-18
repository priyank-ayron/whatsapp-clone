import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr7_t6GfKlU4LynhgVME0lAkKvkyMqYYs",
  authDomain: "whatsapp-clone-priagarwal.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-priagarwal.firebaseio.com",
  projectId: "whatsapp-clone-priagarwal",
  storageBucket: "whatsapp-clone-priagarwal.appspot.com",
  messagingSenderId: "571681942692",
  appId: "1:571681942692:web:8aa02c802665edd4790a31",
  measurementId: "G-VLXN2N58DN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
