import {
  validFileSize,
  validFileType,
} from "../utilities/image-upload-validity";
import { useRef } from "react";

function ProfilePicture() {
  const noUserPictureUrl =
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-2a893.appspot.com/o/no-user-pic.png?alt=media&token=8b751397-f2d5-4354-b44b-75ad01c1bef9";
  const profilePreview = useRef();
  const movePicture = (direction) => {
    let curr = parseInt(profilePreview.current.style.left.split("p")[0]);
    if (direction === "L") {
      !Number.isNaN(curr)
        ? (profilePreview.current.style.left =
            parseInt(profilePreview.current.style.left.split("p")[0]) -
            5 +
            "px")
        : (profilePreview.current.style.left = "-10px");
    }
    if (direction === "R") {
      !Number.isNaN(curr)
        ? (profilePreview.current.style.left =
            parseInt(profilePreview.current.style.left.split("p")[0]) +
            5 +
            "px")
        : (profilePreview.current.style.left = "10px");
    }
  };
  const updatePreview = async (e) => {
    const curFiles = e.target.files;
    if (curFiles.length === 0) {
      return;
    }
    const img = curFiles[0];
    if (!validFileSize(img) || !validFileType(img)) {
      alert("please choose an image && under 3mb");
      return;
    }
    let url = URL.createObjectURL(img);
    profilePreview.current.src = url;
    currentImage = img;
    imageLeft = profilePreview.current.style.left;
  };
  return (
    <div className="inner-div">
      <label>Profile Picture:</label>
      <div id="profile-preview-container">
        <img
          ref={profilePreview}
          src={noUserPictureUrl}
          alt="no user profile"
          id="profile-preview"
        ></img>
      </div>
      <div className="move-pic-container">
        <div className="move-pic-left" onClick={() => movePicture("L")}>
          L
        </div>
        <div className="move-pic-right" onClick={() => movePicture("R")}>
          R
        </div>
      </div>

      <label htmlFor="input-file" id="input-file-button">
        Upload...
      </label>
      <input
        onChange={updatePreview}
        id="input-file"
        type="file"
        accept="image/*"
      ></input>
    </div>
  );
}
let currentImage;
let imageLeft = "0px";

export { ProfilePicture, currentImage, imageLeft };
