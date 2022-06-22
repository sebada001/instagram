import instalogo from "../img/insta-logo.png";
import border from "../img/long-border.png";
import HeaderContent from "./HeaderContent";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Header(props) {
  const { userLogged, userUid, userAnon } = props;
  const navigate = useNavigate();
  const navigateSignOut = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  return (
    <div id="header">
      <img src={instalogo} alt="logo" className="header-left"></img>
      <HeaderContent
        navigateOut={navigateSignOut}
        userLogged={userLogged}
        userUid={userUid}
        userAnon={userAnon}
      />
      <img src={border} alt="line" id="header-border"></img>
    </div>
  );
}
export default Header;
