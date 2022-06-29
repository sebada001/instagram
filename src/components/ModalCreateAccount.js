import React, { forwardRef, useRef } from "react";
import { auth, createUser } from "../firebase/auth";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";

const ModalCreate = forwardRef((props, ref) => {
  const passwordCreate = useRef();
  const emailCreate = useRef();
  const modalCreate = ref;
  const { onClickCancel, handleClickNavigate } = props;

  const createAccountCheck = async () => {
    try {
      if (checkValidEmail(emailCreate) && checkValidPassword(passwordCreate)) {
        console.log("ar");
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
  const checkValidEmail = (inp) => {
    let email = inp.current.value;
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      //    \
      inp.current.style.border = "";
      return true;
    } else {
      inp.current.style.border = "1px red solid";
      return false;
    }
  };
  const checkValidPassword = (inp) => {
    let password = inp.current.value;
    if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      inp.current.style.border = "";
      return true;
    } else {
      inp.current.style.border = "1px red solid";
      return false;
    }
  };

  return (
    <div className="modal-create" ref={modalCreate}>
      <img src={top} className="top-modal" alt="top" />
      <img src={bottom} className="bottom-modal" alt="bottom" />
      <label>Email:</label>
      <input
        type="text"
        id="email-create"
        placeholder="abc@cba.com"
        ref={emailCreate}
        onBlur={() => checkValidEmail(emailCreate)}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        id="password-create"
        onClick={() => checkValidPassword(passwordCreate)}
        ref={passwordCreate}
      ></input>
      <div>
        <button onClick={createAccountCheck}>Create Account</button>
        <button onClick={() => onClickCancel(modalCreate)}>Cancel</button>
      </div>
    </div>
  );
});
export default ModalCreate;
