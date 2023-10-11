import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Cate from "./Components/Cate/cate";
import Oracion from "./Components/Oracion/oracion";
import Familia from "./Components/Familia/familia";
import Iniciate from "./Components/Iniciate/iniciate";
import Login from "./Components/Login/login"
import CrearGrupo from "./Components/CreateGroup/crearGrupo";
import NavBar from "./Components/NavBar/navbar";
import Apostolate from "./Components/Apostolate/apostolate";
import Footer from "./Components/Footer/footer";
import Error from "./Components/Error/error";

function App() {
  return (
    <div> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cate" element={<Cate />} />
        <Route path="/apostolate" element={<Apostolate />} />
        <Route path="/familia" element={<Familia />} />
        <Route path="/creargrupo" element={<CrearGrupo />} />
        <Route path="/iniciate" element={<Iniciate />} />
        <Route path="/oracion" element={<Oracion />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
