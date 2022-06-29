import { forwardRef, useRef } from "react";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import {
  checkValidEmail,
  checkValidPassword,
} from "../utilities/email-password-validity";
import { auth, signIn } from "../firebase/auth";

const ModalSignIn = forwardRef((props, ref) => {
  const { onClickCancel, handleClickNavigate } = props;
  const modal = ref;
  const emailSignIn = useRef();
  const passwordSignIn = useRef();

  const signInCheck = async () => {
    try {
      if (checkValidEmail(emailSignIn) && checkValidPassword(passwordSignIn)) {
        await signIn(
          auth,
          emailSignIn.current.value,
          passwordSignIn.current.value
        );
        handleClickNavigate();
      } else {
        alert("try again");
      }
    } catch (error) {
      console.error(error.code);
      console.error(error.message);
    }
  };
  return (
    <div className="modal-sign-in" ref={modal}>
      <img src={top} className="top-modal" alt="top" />
      <img src={bottom} className="bottom-modal" alt="bottom" />
      <label>Email:</label>
      <input
        type="text"
        id="email-sign-in"
        placeholder="abc@cba.com"
        ref={emailSignIn}
      ></input>
      <label>Password:</label>
      <input type="password" id="password-sign-in" ref={passwordSignIn}></input>
      <div>
        <button onClick={signInCheck}>Sign In</button>
        <button onClick={onClickCancel}>Cancel</button>
      </div>
    </div>
  );
});

export default ModalSignIn;
