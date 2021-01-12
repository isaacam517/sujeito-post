import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBsRYxoqTllOyb2Gkq45YVILJb4B4xhiJM",
    authDomain: "sujeitopost-fbb91.firebaseapp.com",
    projectId: "sujeitopost-fbb91",
    storageBucket: "sujeitopost-fbb91.appspot.com",
    messagingSenderId: "13462967242",
    appId: "1:13462967242:web:1a600c53ef52bba4efb533",
    measurementId: "G-E4K54JCEY5"
  };
  if(!firebase.apps.length){
    /// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;