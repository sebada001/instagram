import bottom from "../svg/bottom.svg";
import top from "../svg/top.svg";
import right from "../svg/right.svg";
import left from "../svg/left.svg";
import { anonSignIn, signMeOut, auth } from "../firebase/auth";

function SignIn() {
  return (
    <div className="Sign-in">
      <div id="square-sign-in">
        <img src={top} className="top-si" alt="top" />
        <img src={bottom} className="bottom-si" alt="bottom" />
        <img src={bottom} className="inner-bottom-si" alt="inner-bottom" />
        <img src={top} className="inner-bottom-2-si" alt="inner-bottom-2" />
        <div className="sign-in-anonymous" onClick={() => anonSignIn(auth)}>
          <span>Sign in anonymously</span>
        </div>
        <div className="sign-in-email">
          <span>Sign in email</span>
        </div>
        <div className="create-account">
          <span>Create account</span>
        </div>
        {/* <div className="trying" >
          
        </div> */}
        {/* <div className="tryingOut" onClick={() => signMeOut(auth)}>
          {" "}
          sign out
        </div> */}
      </div>
    </div>
  );
}

export default SignIn;
