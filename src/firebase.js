import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkknQgEI7rGNMxYR2LPWGMcexO-nPoAMM",
    authDomain: "le-chat-4a836.firebaseapp.com",
    projectId: "le-chat-4a836",
    storageBucket: "le-chat-4a836.appspot.com",
    messagingSenderId: "271596024278",
    appId: "1:271596024278:web:17274acca0850e242ff477",
    measurementId: "G-1QZC63JTYR"
  };

  const app =firebase.initializeApp(firebaseConfig);
  const database= app.firestore();

  export default database;