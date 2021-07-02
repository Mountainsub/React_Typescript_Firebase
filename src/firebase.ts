
import firebase from "firebase/app"
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDbUopVzSOr_WMwkDFmC_kob5G4av0K_4Y",
    authDomain: "reactproject-3954a.firebaseapp.com",
    databaseURL: "https://reactproject-3954a.firebaseio.com", 
    projectId: "reactproject-3954a",
    storageBucket: "reactproject-3954a.appspot.com",
    messagingSenderId: "350922666270",
    appId: "1:350922666270:web:086beccdf3f9c4cff9590f"
  });
  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();