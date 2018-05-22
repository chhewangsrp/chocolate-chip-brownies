import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCwWKPaTOwU0VXkq058iokC1A4CrgrjwUY",
    authDomain: "final-project-c2152.firebaseapp.com",
    databaseURL: "https://final-project-c2152.firebaseio.com",
    projectId: "final-project-c2152",
    storageBucket: "final-project-c2152.appspot.com",
    messagingSenderId: "39456954978"
  };

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;