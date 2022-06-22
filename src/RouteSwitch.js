import SignIn from "./components/SignIn";
import FeedPost from "./components/FeedPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const RouteSwitch = (props) => {
  const { userLogged, userUid, userAnon } = props;
  return (
    <BrowserRouter basename="/instagram">
      <Header userLogged={userLogged} userUid={userUid} userAnon={userAnon} />
      <Routes>
        <Route
          path="/"
          element={
            <SignIn
              userLogged={userLogged}
              userUid={userUid}
              userAnon={userAnon}
            />
          }
        />
        <Route
          path="/in"
          element={
            <FeedPost
              userLogged={userLogged}
              userUid={userUid}
              userAnon={userAnon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
