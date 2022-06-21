import instalogo from "../img/insta-logo.png";
import border from "../img/long-border.png";
import HeaderContent from "./HeaderContent";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Header() {
  const navigate = useNavigate();
  const navigateSignOut = useCallback(
    () => navigate("/sign-in", { replace: true }),
    [navigate]
  );
  return (
    <div id="header">
      <img src={instalogo} alt="logo"></img>
      <HeaderContent navigateOut={navigateSignOut} />
      <img src={border} alt="line" id="header-border"></img>
    </div>
  );
}
export default Header;