import firebase from 'firebase';
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCQNmD9H6o842VcYfGFg6yAO5aMsrNiX7s",
    authDomain: "theviphotel-234d9.firebaseapp.com",
    databaseURL: "https://theviphotel-234d9.firebaseio.com",
    projectId: "theviphotel-234d9",
    storageBucket: "theviphotel-234d9.appspot.com",
    messagingSenderId: "895361614259",
    appId: "1:895361614259:web:d6ef723edfe511e0c54bc6",
    measurementId: "G-CS8MG4VHSK"
};
// Initialize Firebase
const fb = firebase.initializeApp(config);
const db = firebase.firestore();
firebase.analytics();

export {fb,db};