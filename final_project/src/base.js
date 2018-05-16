import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAcPbMdipf4E_ndmkC6Mixu_bNrC1qASaA",
    authDomain: "chocolate-chip-b-1525665025776.firebaseapp.com",
    databaseURL: "https://chocolate-chip-b-1525665025776.firebaseio.com",
    projectId: "chocolate-chip-b-1525665025776",
    storageBucket: "chocolate-chip-b-1525665025776.appspot.com",
    messagingSenderId: "298251349912"
  };

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;