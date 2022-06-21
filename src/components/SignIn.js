import React, { useCallback } from "react";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import { anonSignIn, signMeOut, auth } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

let uid;
let isAnon;
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
    isAnon = user.isAnonymous;
  }
});
function SignIn() {
  const navigate = useNavigate();
  const handleClickNavigate = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const handleClick = async () => {
    await anonSignIn(auth);
    if (uid !== undefined) {
      handleClickNavigate();
    }
  };
  return (
    <div className="Sign-in">
      <div id="square-sign-in">
        <img src={top} className="top-si" alt="top" />
        <img src={bottom} className="bottom-si" alt="bottom" />
        <img src={bottom} className="inner-bottom-si" alt="inner-bottom" />
        <img src={top} className="inner-bottom-2-si" alt="inner-bottom-2" />

        <div className="sign-in-anonymous" onClick={handleClick}>
          <span>Sign in anonymously</span>
        </div>
        <div className="sign-in-email">
          <span>Sign in email</span>
        </div>
        <div className="create-account">
          <span>Create account</span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
