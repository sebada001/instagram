import FeedPost from "./FeedPost";
import { anonSignIn, auth, signMeOut } from "../firebase/auth";
import SignIn from "./SignIn";
import Header from "./Header";
import "../styles/App.css";
import "../styles/Header.css";
import "../styles/SignIn.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FeedPost /> */}
      <SignIn />
    </div>
  );
}

export default App;
