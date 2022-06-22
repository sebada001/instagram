import { auth, signMeOut } from "../firebase/auth";

function HeaderContent(props) {
  const { userLogged, userUid, userAnon, navigateOut } = props;
  const handleClick = async (auth) => {
    await signMeOut(auth);
    navigateOut();
  };
  if (userLogged) {
    return (
      <div className="header-right">
        {/* <div className="user-name">Hello, {userUid}</div> */}
        <div className="sign-out" onClick={handleClick}>
          sign out
        </div>
      </div>
    );
  } else {
    return <p className="header-right">lookin slic, stranger</p>;
  }
}

export default HeaderContent;
