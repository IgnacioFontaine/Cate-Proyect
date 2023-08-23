import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Profile from "./Components/Profile/profile";
import CreateAccount from "./Components/CreateAccount/createAccount";
import Login from "./Components/Login/login";
import CreateGroup from "./Components/CreateGroup/createGroup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/createGroup" element={<CreateGroup />} />
      </Routes>
    </div>
  );
}

export default App;
