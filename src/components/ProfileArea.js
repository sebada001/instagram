import pic from "../img/sc.jpg";

const ProfileArea = function () {
  return (
    <div className="profile-area">
      <div id="pic-container-side">
        <img src={pic} id="profile-pic-side" alt="profile picture"></img>
      </div>
      <p>profile name</p>
    </div>
  );
};
export default ProfileArea;
