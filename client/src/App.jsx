import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Profile from "./Components/Profile/profile";
import CreateAccount from "./Components/CreateAccount/createAccount";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
