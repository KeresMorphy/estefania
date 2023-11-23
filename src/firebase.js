// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCgCTl5eEFms32D9SAN4a1P0VR7f3bQJ_k",
    authDomain: "vue-alumnos.firebaseapp.com",
    projectId: "vue-alumnos",
    storageBucket: "vue-alumnos.appspot.com",
    messagingSenderId: "222979646641",
    appId: "1:222979646641:web:57c36cf941f1c88b3e6e90"
  };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
