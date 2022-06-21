import SignIn from "./components/SignIn";
import FeedPost from "./components/FeedPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/instagram">
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<FeedPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
