import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAC-oBQODOpCPd8FCkTJJiGr8pzJCZIPRg",
  authDomain: "crown-db-e24e9.firebaseapp.com",
  projectId: "crown-db-e24e9",
  storageBucket: "crown-db-e24e9.appspot.com",
  messagingSenderId: "922326496108",
  appId: "1:922326496108:web:ee9d708d2c73ecb8b5f949",
  measurementId: "G-TR42TXSCZB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;