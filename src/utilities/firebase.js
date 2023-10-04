import { useCallback, useEffect, useState } from 'react';
import { getApps, initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { getApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};

const firebaseConfig = {
  apiKey: "AIzaSyDqPdyqFmOoBehs4NQpMOS-M7YFE43M_t8",
  authDomain: "cs392-quick-react.firebaseapp.com",
  databaseURL: "https://cs392-quick-react-default-rtdb.firebaseio.com",
  projectId: "cs392-quick-react",
  storageBucket: "cs392-quick-react.appspot.com",
  messagingSenderId: "243724967997",
  appId: "1:243724967997:web:b01d150027e0f4819fca54"
};
let firebase;
// Initialize Firebase
if (!getApps().length){
  firebase = initializeApp(firebaseConfig);
}
else {
  firebase = getApp(firebaseConfig)
}
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};