import SignIn from "./components/SignIn";
import FeedPost from "./components/FeedPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter basename="/instagram">
      <Header {...props} />
      <Routes>
        <Route path="/" element={<SignIn {...props} />} />
        <Route path="/in" element={<FeedPost {...props} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
