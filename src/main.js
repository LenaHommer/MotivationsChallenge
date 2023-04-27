import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */

// Vuetify

// Styles
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.use(vuetify);
app.mount("#app");
