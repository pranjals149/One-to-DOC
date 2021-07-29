import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBd91ZeHRRWmoyl3miYmP46hbIq2enYFDs",
    authDomain: "onetodoc.firebaseapp.com",
    projectId: "onetodoc",
    storageBucket: "onetodoc.appspot.com",
    messagingSenderId: "830497509803",
    appId: "1:830497509803:web:0c8f4cea967e5ac09c82ee",
    measurementId: "G-330GN2J44G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };