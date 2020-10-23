/*************************************************
 * Class Name: Firebase config
 * Created Date: 08/09/2020 
 * Edited By: Aaron, Min, Jack, Doug
 * Last Edited: 11/09/2020
 * -----------------------------------------------
 * Imports into:
 * index.js
 * -----------------------------------------------
 * Description:
 * Initialisation of firebase
 *************************************************/
import firebase from 'firebase/app'
import 'firebase/firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBh-rreBVjzuz1M7TPii3Bc8B1G_tzpkv4",
    authDomain: "itsmainproject-aaa25.firebaseapp.com",
    databaseURL: "https://itsmainproject-aaa25.firebaseio.com",
    projectId: "itsmainproject-aaa25",
    storageBucket: "itsmainproject-aaa25.appspot.com",
    messagingSenderId: "1009193032724",
    appId: "1:1009193032724:web:2562c2ef24737b4621db01",
    measurementId: "G-Q16J5NZYHW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;