import FeedPost from "./FeedPost";
import { anonSignIn, auth, signMeOut } from "../firebase/auth";

function App() {
  return (
    <div className="App">
      <FeedPost />
      <div className="trying" onClick={() => anonSignIn(auth)}>
        sign in anonymously
      </div>
      <div className="tryingOut" onClick={() => signMeOut(auth)}>
        {" "}
        sign out
      </div>
    </div>
  );
}

export default App;
