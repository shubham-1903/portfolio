import firebase from 'firebase'
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALRrJ5fuf60_AkhMKiNF4UM76RJq_nYps",
  authDomain: "contact-me-dec4b.firebaseapp.com",
  projectId: "contact-me-dec4b",
  storageBucket: "contact-me-dec4b.appspot.com",
  messagingSenderId: "845056982140",
  appId: "1:845056982140:web:f6b2a624ece42562549df9"
});
var db=firebaseApp.firestore();
export {db};