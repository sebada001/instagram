import "../styles/App.css";
import "../styles/Header.css";
import "../styles/SignIn.css";
import "../styles/GeneralFeed.css";
import "../styles/FeedPost.css";
import RouteSwitch from "../RouteSwitch";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/auth";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userUid, setUserUid] = useState(undefined);
  const [userAnon, setUserAnon] = useState(false);
  const [userName, setUserName] = useState(undefined);
  const [userPicture, setUserPicture] = useState();

  const handleLogIn = (user) => {
    if (user) {
      setUserLogged(true);
      setUserUid(user.uid);
      setUserAnon(user.isAnonymous);
      if (user.displayName) {
        setUserName(user.displayName);
      } else {
        setUserName("anon");
      }
      if (user.photoURL) {
        setUserPicture(user.photoURL);
      }
    } else {
      setUserLogged(false);
      setUserUid(undefined);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogIn(user);
      } else {
        handleLogIn();
      }
    });
    return unsubscribe;
  });

  return (
    <div className="App">
      <RouteSwitch
        userLogged={userLogged}
        userUid={userUid}
        userAnon={userAnon}
        userName={userName}
        handleLogIn={handleLogIn}
        setUserPicture={setUserPicture}
        userPicture={userPicture}
      />
    </div>
  );
}

export default App;
