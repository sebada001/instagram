import SignIn from "./components/SignIn";
import FeedPost from "./components/FeedPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/instagram">
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/in" element={<FeedPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
