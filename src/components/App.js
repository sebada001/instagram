import "../styles/App.css";
import "../styles/Header.css";
import "../styles/SignIn.css";
import RouteSwitch from "../RouteSwitch";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/auth";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userUid, setUserUid] = useState(undefined);
  const [userAnon, setUserAnon] = useState(false);
  let authCheck = () =>
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogIn(user);
      } else {
        handleLogIn();
      }
    });
  const handleLogIn = (user) => {
    if (user !== undefined) {
      setUserLogged(true);
      setUserUid(user.uid);
      setUserAnon(user.isAnonymous);
    } else {
      setUserLogged(false);
      setUserUid(undefined);
    }
  };
  useEffect(() => {
    authCheck();
  });
  return (
    <div className="App">
      <RouteSwitch
        userLogged={userLogged}
        userUid={userUid}
        userAnon={userAnon}
      />
    </div>
  );
}

export default App;
