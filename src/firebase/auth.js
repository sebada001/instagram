import app from "./app-init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  updateProfile,
  reload,
} from "firebase/auth";

const auth = getAuth(app);

const createUser = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // updateProfile(user, {
      //   displayName: username,
      // }).then(() => {
      //   user.reload();
      //   console.log("userCreated");
      // });
      console.log("userCreated");
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
const signIn = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("signed in email");
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
      console.log("signed in anon");
    })
    .catch((error) => {
      console.log(error.message, error.code);
    });
const signMeOut = () =>
  signOut(auth)
    .then(() => {
      console.log("signed out");
    })
    .catch((error) => {
      console.log(error.message, error.code);
    });

export { anonSignIn, auth, createUser, signIn, signMeOut };
