import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyADxtTydWoEDBMvQVVPgUpPfShVI3nbFow",
    authDomain: "motivationschallenge.firebaseapp.com",
    databaseURL: "https://motivationschallenge-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "motivationschallenge",
    storageBucket: "motivationschallenge.appspot.com",
    messagingSenderId: "1076637910265",
    appId: "1:1076637910265:web:bbf8af19c6ed8efbdc8e28",
    measurementId: "G-30X150DN7Y"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db 
