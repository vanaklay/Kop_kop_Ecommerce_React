import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    // Key api
    
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// How to store data from auth inside cloud firestore
// 1. Create function that have 2 parameters, the userAuth: object and additonalData: object
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // 2. Check if userAuth exists, if not return this function
  if (!userAuth) return;
  // 3. Create a document reference by querying firestore
  // To get back the user reference at that location
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // 4. Get back the document snapShot === data at this current place
  const snapShot = await userRef.get();
  // 5. Using that snapshot to check whether or not there's data there 
  // if it doesn't exist we want to create a piece of data to store inside database 
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // 6. Set database with the new object
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
  // 7. Return userRef to use after 
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// To set up our Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;