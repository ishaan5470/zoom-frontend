import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseConfig={
    apiKey: "AIzaSyCBNQ9i0yx69Obxj3epdiCkP6j3L30GUXw",
  authDomain: "zoomy-cb599.firebaseapp.com",
  projectId: "zoomy-cb599",
  storageBucket: "zoomy-cb599.appspot.com",
  messagingSenderId: "251285472103",
  appId: "1:251285472103:web:50aa5b79cfa4241777e5c2",
  measurementId: "G-68M9PSTW1X"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase};