import React, { forwardRef, useRef } from "react";
import { auth, createUser } from "../firebase/auth";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidUserName,
} from "../utilities/email-password-validity";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
//
const ModalCreate = forwardRef((props, ref) => {
  const passwordCreate = useRef();
  const emailCreate = useRef();
  const username = useRef();
  const modalCreate = ref;
  const { onClickCancel, handleClickNavigate } = props;
  const createAccountCheck = async () => {
    try {
      if (
        checkValidEmail(emailCreate) &&
        checkValidPassword(passwordCreate) &&
        checkValidUserName(username)
      ) {
        await createUser(
          auth,
          emailCreate.current.value,
          passwordCreate.current.value,
          username.current.value
        );
        handleClickNavigate();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="modal-create" ref={modalCreate}>
      <img src={top} className="top-modal" alt="top" />
      <img src={bottom} className="bottom-modal" alt="bottom" />
      <label>Username:</label>
      <input
        type="text"
        id="user-name"
        placeholder="Jimmy Juffles"
        ref={username}
        onBlur={() => checkValidUserName(username)}
      ></input>
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
        ref={passwordCreate}
        onClick={() => checkValidPassword(passwordCreate)}
      ></input>
      <div>
        <button onClick={createAccountCheck}>Create Account</button>
        <button onClick={() => onClickCancel(modalCreate)}>Cancel</button>
      </div>
    </div>
  );
});
export default ModalCreate;
