import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAmrG5fxXSsTJCvF3qbq5bTC0nOpwGQYl4",
  authDomain: "bookstore-a16a3.firebaseapp.com",
  databaseURL: "https://bookstore-a16a3.firebaseio.com",
  projectId: "bookstore-a16a3",
  storageBucket: "bookstore-a16a3.appspot.com",
  messagingSenderId: "770064090220",
  appId: "1:770064090220:web:3c3d95e98c7496938ac449",
  measurementId: "G-KF0L02F0YQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//   firebase.analytics();
export { firebase, database as default };
