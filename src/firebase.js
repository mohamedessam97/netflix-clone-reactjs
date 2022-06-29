import {initializeApp} from 'firebase/app'
import {getStorage}from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAzHszv8pg2lKFZyJN2718X7SQ0gQt5i5s",
    authDomain: "netfilx-80fe9.firebaseapp.com",
    projectId: "netfilx-80fe9",
    storageBucket: "netfilx-80fe9.appspot.com",
    messagingSenderId: "266371542357",
    appId: "1:266371542357:web:092358b831106031bf93dc",
    measurementId: "G-M0H8DTEWFX"
  };

export const app =initializeApp(firebaseConfig);
export const storage =getStorage()