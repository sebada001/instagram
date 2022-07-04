const ProfileArea = function (props) {
  const { userName, userPicture } = props;
  const handleClickUser = () => {
    console.log(userPicture);
  };
  return (
    <div className="profile-area">
      <div id="pic-container-side">
        <img
          src={userPicture}
          id="profile-pic-side"
          alt="user profile"
          onClick={handleClickUser}
        ></img>
      </div>
      <p>{userName}</p>
    </div>
  );
};
export default ProfileArea;
