import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

if (!firebase.apps.length) {
  // Paste your config object here ⬇️
  const firebaseConfig = {
    apiKey: "AIzaSyC63tUa8KL1uJfbvdTW1mii0By8desbTfQ",
    authDomain: "bragify-7cecc.firebaseapp.com",
    projectId: "bragify-7cecc",
    storageBucket: "bragify-7cecc.appspot.com",
    messagingSenderId: "1029392003217",
    appId: "1:1029392003217:web:827f53e05311a72362cf30",
  };

  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

const auth = firebase.auth();

export function onAuthStateChanged(...props) {
  return auth.onAuthStateChanged(...props);
}

export function singInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function singInWithEmailAndPassword(email, password) {
  console.log(email,password)
  return auth.signInWithEmailAndPassword(email, password);
}

export function singUpWithEmailAndPassword( email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function signOut() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}
