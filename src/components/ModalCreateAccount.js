import React, { forwardRef, useRef } from "react";
import { auth, createUser } from "../firebase/auth";
import { updateProfile } from "firebase/auth";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidUserName,
} from "../utilities/email-password-validity";
import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";

const ModalCreate = forwardRef((props, ref) => {
  const noUserPictureUrl =
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/no-user-pic.png?alt=media&token=8b751397-f2d5-4354-b44b-75ad01c1bef9";
  const passwordCreate = useRef();
  const emailCreate = useRef();
  const username = useRef();
  const profilePreview = useRef();
  const modalCreate = ref;
  const { onClickCancel, handleClickNavigate, handleLogIn } = props;
  const updatePreview = async (e) => {
    const curFiles = e.target.files;
    if (curFiles.length == 0) {
      return;
    }
    const img = curFiles[0];
    console.log(img);
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
    //currently implementing...
    //to do:
    //validate this image (size not too big, correct file format)
    //upload to storage in cloud
    //set as user's profileImage
    //create state of profile image in App, this depends on user profileImage
    //image should show to the side

    profilePreview.current.src = URL.createObjectURL(img);
  };
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
          passwordCreate.current.value
        );
        await updateProfile(auth.currentUser, {
          displayName: username.current.value,
        });
        console.log("userNameUpdated");
        handleLogIn(auth.currentUser);
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
      <label>Profile Picture:</label>
      <div id="profile-preview-container">
        <img
          ref={profilePreview}
          src={noUserPictureUrl}
          alt="no user profile picture"
          id="profile-preview"
        ></img>
      </div>
      <label for="input-file" id="input-file-button">
        Upload...
      </label>
      <input
        onChange={updatePreview}
        id="input-file"
        type="file"
        accept="image/*"
      ></input>
      <div>
        <button onClick={createAccountCheck}>Create Account</button>
        <button onClick={() => onClickCancel(modalCreate)}>Cancel</button>
      </div>
    </div>
  );
});
export default ModalCreate;
