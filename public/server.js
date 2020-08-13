const firebase = require('firebase');

// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBzsZwfY-LkQ3He3V_XANV9kIwPb6GxTL4",
    authDomain: "influencerads-57bb1.firebaseapp.com",
    databaseURL: "https://influencerads-57bb1.firebaseio.com",
    projectId: "influencerads-57bb1",
    storageBucket: "influencerads-57bb1.appspot.com",
    messagingSenderId: "874814101669",
    appId: "1:874814101669:web:7c8c08d6ff253f2852d54c",
    measurementId: "G-WK3TXTG9TZ"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db;
