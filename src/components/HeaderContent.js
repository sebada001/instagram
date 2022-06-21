import { onAuthStateChanged } from "firebase/auth";
import { auth, signMeOut } from "../firebase/auth";
import { useState, useEffect } from "react";

let userUid;
let isAnon;
onAuthStateChanged(auth, (user) => {
  if (user) {
    userUid = user.uid;
    isAnon = user.isAnonymous;
  } else {
    userUid = undefined;
  }
});
function HeaderContent(props) {
  const navigateOut = props.navigateOut;
  const handleClick = async (auth) => {
    await signMeOut(auth);
    navigateOut();
  };
  if (userUid !== undefined) {
    return (
      <div className="sign-out header-right" onClick={handleClick}>
        sign out
      </div>
    );
  } else {
    return <p className="header-right">lookin slic, stranger</p>;
  }
}

export default HeaderContent;
