import pic from "../img/sc.jpg";
import { auth } from "../firebase/auth";

const ProfileArea = function (props) {
  const { userName, userUid } = props;
  const handleClickUser = () => {
    console.log(userName);
  };
  return (
    <div className="profile-area">
      <div id="pic-container-side">
        <img
          src={pic}
          id="profile-pic-side"
          alt="profile picture"
          onClick={handleClickUser}
        ></img>
      </div>
      <p>{userName}</p>
    </div>
  );
};
export default ProfileArea;
