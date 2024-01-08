import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBXOymeFqOqaxyAlVfrQzdzZPKZ0nuCxRo",
  authDomain: "js-datos.firebaseapp.com",
  projectId: "js-datos",
  storageBucket: "js-datos.appspot.com",
  messagingSenderId: "373013195949",
  appId: "1:373013195949:web:2283e79e43c3fd03116a24"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
  app
}