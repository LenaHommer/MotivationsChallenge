import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
/* import firebase from "firebase/app";
import "firebase/firestore";


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

firebase.initializeApp(firebaseConfig);

const dp = firebase.firesstore();
const challengeCollection = db.collection("Challenge");

challengeCollection.doc("NcZjv1VHhRnpJ5JE4KK1").get().then((doc) => {
    console.log(doc.data().Test-Challenge);
}); */

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
