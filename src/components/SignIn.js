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
  const onClickCancel = () => {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".black-out").style.display = "none";
  };
  const onSignIn = () => {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".black-out").style.display = "flex";
  };
  const navigate = useNavigate();
  const handleClickNavigateAnon = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const handleClickAnon = async () => {
    await anonSignIn(auth);
    if (uid !== undefined) {
      handleClickNavigateAnon();
    }
  };
  const handleClickEmail = async () => {};
  return (
    <div className="Sign-in">
      <div id="square-sign-in">
        <img src={top} className="top-si" alt="top" />
        <img src={bottom} className="bottom-si" alt="bottom" />
        <img src={bottom} className="inner-bottom-si" alt="inner-bottom" />
        <img src={top} className="inner-bottom-2-si" alt="inner-bottom-2" />

        <div className="sign-in-anonymous" onClick={handleClickAnon}>
          <span>Sign in anonymously</span>
        </div>
        <div className="sign-in-email" onClick={onSignIn}>
          <span>Sign in email</span>
        </div>
        <div className="create-account">
          <span>Create account</span>
        </div>
      </div>
      <div className="modal">
        <img src={top} className="top-modal" alt="top" />
        <img src={bottom} className="bottom-modal" alt="bottom" />
        <label>Email:</label>
        <input type="text" id="email-sign-in" placeholder="abc@cba.com"></input>
        <label>Password:</label>
        <input type="text" id="password-sign-in"></input>
        <div>
          <button>Sign In</button>
          <button onClick={onClickCancel}>Cancel</button>
        </div>
      </div>
      <div className="black-out"></div>
    </div>
  );
}

export default SignIn;
