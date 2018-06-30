import firebase from 'firebase';

var config = {
  apiKey: "",
  authDomain: "reunitefamilies-28bee.firebaseapp.com",
  databaseURL: "https://reunitefamilies-28bee.firebaseio.com",
  projectId: "reunitefamilies-28bee",
  storageBucket: "reunitefamilies-28bee.appspot.com",
  messagingSenderId: "463470163881"
};

var fire = firebase.initializeApp(config);
export default fire;
