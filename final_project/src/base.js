import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBHe5SlvWsHpiIgpVYSiZllZKOCYqsQhRg",
    authDomain: "laser-tag-leaderboard-75366.firebaseapp.com",
    databaseURL: "https://laser-tag-leaderboard-75366.firebaseio.com",
    projectId: "laser-tag-leaderboard-75366",
    storageBucket: "laser-tag-leaderboard-75366.appspot.com",
    messagingSenderId: "297799062363"
  };

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;