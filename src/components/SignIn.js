import React, { useCallback, useRef } from "react";
import { anonSignIn, auth } from "../firebase/auth";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import { useNavigate } from "react-router-dom";
import ModalCreate from "./ModalCreateAccount";
import ModalSignIn from "./ModalSignIn";

function SignIn(props) {
  const modal = useRef();
  const blackOut = useRef();
  const modalCreate = useRef();
  const navigate = useNavigate();

  const onClickCancel = () => {
    modalCreate.current.style.display = "none";
    blackOut.current.style.display = "none";
    modal.current.style.display = "none";
  };
  const onSignIn = () => {
    modal.current.style.display = "flex";
    blackOut.current.style.display = "flex";
  };
  const onCreateAcc = () => {
    modalCreate.current.style.display = "flex";
    blackOut.current.style.display = "flex";
    modal.current.style.display = "flex";
  };

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

        <div className="sign-in-anonymous">
          <span onClick={handleClickAnon}>Sign in anonymously</span>
        </div>
        <div className="sign-in-email">
          <span onClick={onSignIn}>Sign in email</span>
        </div>
        <div className="create-account">
          <span onClick={onCreateAcc}>Create account</span>
        </div>
      </div>
      <ModalSignIn
        ref={modal}
        onClickCancel={onClickCancel}
        handleClickNavigate={handleClickNavigate}
      />
      <ModalCreate
        {...props}
        ref={modalCreate}
        onClickCancel={onClickCancel}
        handleClickNavigate={handleClickNavigate}
      />

      <div className="black-out" ref={blackOut}></div>
    </div>
  );
}

export default SignIn;
