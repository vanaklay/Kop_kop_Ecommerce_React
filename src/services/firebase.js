import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    // Key api
    apiKey: "AIzaSyDXt68mLav64nhQ1SiiLXr4S-Lnyu9cEFM",
    authDomain: "kopkopshop-f69ec.firebaseapp.com",
    databaseURL: "https://kopkopshop-f69ec.firebaseio.com",
    projectId: "kopkopshop-f69ec",
    storageBucket: "kopkopshop-f69ec.appspot.com",
    messagingSenderId: "659613810898",
    appId: "1:659613810898:web:b487b0dd09e01ea2e86d0b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    };
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// To set up our Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;