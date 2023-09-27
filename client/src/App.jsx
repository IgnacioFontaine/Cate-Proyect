import "./App.css";
import Home from "./Components/Home/home";
import Cate from "./Components/Cate/cate";
import Oracion from "./Components/Oracion/oracion";
import Familia from "./Components/Familia/familia";
import Iniciate from "./Components/Iniciate/iniciate";
import Login from "./Components/Login/login"
import { Route, Routes } from "react-router-dom";
// import  CrearGrupo  from "./Components/CreateGroup/createGroup.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/creargrupo" element={<CrearGrupo />} /> */}
        <Route path="/cate" element={<Cate />} />
        <Route path="/iniciate" element={<Iniciate />} />
        <Route path="/familia" element={<Familia />} />
        <Route path="/oracion" element={<Oracion />} />
      </Routes>
    </div>
  );
}

export default App;
