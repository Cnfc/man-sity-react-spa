import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyADo-Yd11eAB77baPfia53BwRycDhwk7b0",
    authDomain: "m-city-65172.firebaseapp.com",
    databaseURL: "https://m-city-65172.firebaseio.com",
    projectId: "m-city-65172",
    storageBucket: "m-city-65172.appspot.com",
    messagingSenderId: "894486813632"
  };

firebase.initializeApp(config);

// Connect firebase
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');


export {
  firebase,
  firebaseMatches,
  firebasePromotions
}
