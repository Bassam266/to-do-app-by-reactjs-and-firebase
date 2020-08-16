import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
 {
  apiKey: "AIzaSyDNFeb2C8MGoeBgqxKFDYCB0ES0q-1Hpqs",
 authDomain: "todo-app-cp-5abf7.firebaseapp.com",
 databaseURL: "https://todo-app-cp-5abf7.firebaseio.com",
 projectId: "todo-app-cp-5abf7",
 storageBucket: "todo-app-cp-5abf7.appspot.com",
 messagingSenderId: "329894525715",
 appId: "1:329894525715:web:1f836f6e9cbce14ce538e6",
 measurementId: "G-8D1XJSDJJ7"
 }
)

const db = firebaseApp.firestore();

export default db;








