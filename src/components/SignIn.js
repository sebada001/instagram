import React, { useCallback, useRef } from "react";
import { anonSignIn, auth, createUser } from "../firebase/auth";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import { useNavigate } from "react-router-dom";

function SignIn(props) {
  const modal = useRef();
  const modalCreate = useRef();
  const blackOut = useRef();
  const emailCreate = useRef();
  const passwordCreate = useRef();
  const onClickCancel = () => {
    modalCreate.current.style.display = "none";
    modal.current.style.display = "none";
    blackOut.current.style.display = "none";
  };
  const onSignIn = () => {
    modal.current.style.display = "flex";
    blackOut.current.style.display = "flex";
  };
  const onCreateAcc = () => {
    modalCreate.current.style.display = "flex";
    blackOut.current.style.display = "flex";
  };
  const createAccountCheck = async () => {
    try {
      if (checkValidEmail() && checkValidPassword()) {
        await createUser(
          auth,
          emailCreate.current.value,
          passwordCreate.current.value
        );
        handleClickNavigate();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const checkValidEmail = () => {
    let email = emailCreate.current.value;
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      emailCreate.current.style.border = "";
      return true;
    } else {
      emailCreate.current.style.border = "1px red solid";
      return false;
    }
  };
  const checkValidPassword = () => {
    let password = passwordCreate.current.value;
    if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      passwordCreate.current.style.border = "";
      return true;
    } else {
      passwordCreate.current.style.border = "1px red solid";
      return false;
    }
  };
  const navigate = useNavigate();
  const handleClickNavigate = useCallback(
    () => navigate("/in", { replace: true }),
    [navigate]
  );
  const handleClickAnon = async () => {
    try {
      await anonSignIn(auth);
      handleClickNavigate();
    } catch (error) {
      console.error(error);
    }
  };
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
        <div className="create-account" onClick={onCreateAcc}>
          <span>Create account</span>
        </div>
      </div>
      <div className="modal" ref={modal}>
        <img src={top} className="top-modal" alt="top" />
        <img src={bottom} className="bottom-modal" alt="bottom" />
        <label>Email:</label>
        <input type="text" id="email-sign-in" placeholder="abc@cba.com"></input>
        <label>Password:</label>
        <input type="password" id="password-sign-in"></input>
        <div>
          <button>Sign In</button>
          <button onClick={onClickCancel}>Cancel</button>
        </div>
      </div>
      <div className="modal-create" ref={modalCreate}>
        <img src={top} className="top-modal" alt="top" />
        <img src={bottom} className="bottom-modal" alt="bottom" />
        <label>Email:</label>
        <input
          type="text"
          id="email-create"
          placeholder="abc@cba.com"
          ref={emailCreate}
          onBlur={checkValidEmail}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          id="password-create"
          ref={passwordCreate}
          onClick={checkValidPassword}
        ></input>
        <div>
          <button onClick={createAccountCheck}>Create Account</button>
          <button onClick={onClickCancel}>Cancel</button>
        </div>
      </div>
      <div className="black-out" ref={blackOut}></div>
    </div>
  );
}

export default SignIn;
