import instalogo from "../img/insta-logo.png";
import border from "../img/long-border.png";

function Header() {
  return (
    <div id="header">
      <img src={instalogo} alt="logo"></img>
      <p>lookin slic, stranger</p>
      <img src={border} alt="line" id="header-border"></img>
    </div>
  );
}
export default Header;
