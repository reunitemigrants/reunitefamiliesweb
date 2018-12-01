import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBmfPsctNZH1bkq9GmaIM8-V8zPvv40noU',
  authDomain: 'reunitefamilies-28bee.firebaseapp.com',
  databaseURL: 'https://reunitefamilies-28bee.firebaseio.com',
  messagingSenderId: '463470163881',
  projectId: 'reunitefamilies-28bee',
  storageBucket: 'reunitefamilies-28bee.appspot.com',
};

export const fire = firebase.initializeApp(config);
