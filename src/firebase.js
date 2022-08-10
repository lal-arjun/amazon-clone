// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdpS8Sn9nXKRe53tglIMftM47r3iHFGco",
  authDomain: "test--clone-502b6.firebaseapp.com",
  projectId: "test--clone-502b6",
  storageBucket: "test--clone-502b6.appspot.com",
  messagingSenderId: "86683321197",
  appId: "1:86683321197:web:7430dc7fc9f853bdb75064"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};