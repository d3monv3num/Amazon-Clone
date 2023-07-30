import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBqbX9I8DYY8vwHAdq2YQ0yhTGPOUAsODc",
    authDomain: "ecommerce-clone-b001a.firebaseapp.com",
    projectId: "ecommerce-clone-b001a",
    storageBucket: "ecommerce-clone-b001a.appspot.com",
    messagingSenderId: "1049724207527",
    appId: "1:1049724207527:web:99b71eda3e1fce4e523682",
    measurementId: "G-RWE0Z49X2S"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};
