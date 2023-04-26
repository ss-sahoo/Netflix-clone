import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8Pq8GjS9U_L1bVSztv6zpVTkQmHhRYPk",
    authDomain: "netflix-build-cc39e.firebaseapp.com",
    projectId: "netflix-build-cc39e",
    storageBucket: "netflix-build-cc39e.appspot.com",
    messagingSenderId: "147016526866",
    appId: "1:147016526866:web:da696548c7cd7812c9bccb"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export { auth };
  export default db;

