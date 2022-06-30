import SignIn from "./components/SignIn";
import GeneralFeed from "./components/GeneralFeed";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter basename="/instagram">
      <Header {...props} />
      <Routes>
        <Route path="/" element={<SignIn {...props} />} />
        <Route path="/in" element={<GeneralFeed {...props} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
