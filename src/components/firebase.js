import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmu65IWt7z0JxQyZbOpPKoFGnId-DMuno",
  authDomain: "discord-clone-67584.firebaseapp.com",
  projectId: "discord-clone-67584",
  storageBucket: "discord-clone-67584.appspot.com",
  messagingSenderId: "965303560041",
  appId: "1:965303560041:web:088bdb26ff5462dee0bff8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();


export { auth, provider };

export default db;
