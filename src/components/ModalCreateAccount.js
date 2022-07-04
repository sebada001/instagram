import React, { forwardRef, useRef } from "react";
import { auth, createUser } from "../firebase/auth";
import { updateProfile } from "firebase/auth";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import { currentImage } from "./ProfilePicture";
import { uploadProfilePic } from "../firebase/storage";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidUserName,
} from "../utilities/email-password-validity";

const ModalCreate = forwardRef((props, ref) => {
  const passwordCreate = useRef();
  const emailCreate = useRef();
  const username = useRef();
  const modalCreate = ref;
  const { onClickCancel, handleClickNavigate, handleLogIn } = props;
  const storeData = {};
  //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
  const createAccount = async () => {
    try {
      await createUser(
        storeData.auth,
        storeData.emailCreate,
        storeData.passwordCreate
      );
      await updateProfile(auth.currentUser, {
        displayName: username.current.value,
      });
      console.log("userNameUpdated");
      if (currentImage !== undefined) {
        const file = document.querySelector("#input-file").files[0];
        await uploadProfilePic(file, auth.currentUser);
        console.log("profile picture pploaded");
      }
      handleLogIn(auth.currentUser);
      handleClickNavigate();
    } catch (error) {
      console.error(error);
    }
  };
  const createAccountCheck = async () => {
    if (
      checkValidEmail(emailCreate) &&
      checkValidPassword(passwordCreate) &&
      checkValidUserName(username)
    ) {
      storeData.auth = auth;
      storeData.emailCreate = emailCreate.current.value;
      storeData.passwordCreate = passwordCreate.current.value;
      createAccount();
    } else {
      return;
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
      <div className="create-first-buttons">
        <button onClick={() => onClickCancel(modalCreate)}>Cancel</button>
        <button onClick={createAccountCheck}>Create</button>
      </div>
    </div>
  );
});
export default ModalCreate;
