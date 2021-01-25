import firebase from 'firebase/app';
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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additonalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;