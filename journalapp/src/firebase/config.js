// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnviroment';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMgv5IiX9UtsMZGQDAv5UzqoShXabh7Q8",
    authDomain: "diaryjournalapp.firebaseapp.com",
    databaseURL: "https://diaryjournalapp-default-rtdb.firebaseio.com",
    projectId: "diaryjournalapp",
    storageBucket: "diaryjournalapp.appspot.com",
    messagingSenderId: "438478445398",
    appId: "1:438478445398:web:287a7ef3952bb12ae154f7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
