import app from "./app-init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

const createUser = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
const signIn = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
const anonSignIn = (auth) =>
  signInAnonymously(auth)
    .then(() => {
      console.log("signed in lel");
      return "logged";
    })
    .catch((error) => {
      console.log(error.message, error.code);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
const signMeOut = () =>
  signOut(auth)
    .then(() => {
      console.log("signed out");
    })
    .catch((error) => {
      // An error happened.
    });

// onAuthStateChanged(auth, (user) => {
//   console.log("any");
//   if (user) {
//     //available properties for user: https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log("onauthcall");
//     // return [true, uid];
//     // ...
//   } else {
//     console.log("none");
//     // return [false];
//     // ...
//   }
// });

export { anonSignIn, auth, createUser, signIn, signMeOut };
