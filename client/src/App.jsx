import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Oracion from "./Components/Oracion/oracion";
import Familia from "./Components/Familia/familia";
import Login from "./Components/Login/login"
import CrearGrupo from "./Components/CreateGroup/crearGrupo";
import NavBar from "./Components/NavBar/navbar";
import Apostolate from "./Components/Apostolate/apostolate";
import Patrulla from "./Components/Patrulla/patrulla";
import Footer from "./Components/Footer/footer";
import CrearPatrullero from "./Components/CrearPatrulla/crearPatrulla";
import Error from "./Components/Error/error";

function App() {
  return (
    <div> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apostolate" element={<Apostolate />} />
        <Route path="/familia" element={<Familia />} />
        <Route path="/creargrupo" element={<CrearGrupo />} />
        <Route path="/crearpatrullero" element={<CrearPatrullero />} />
        <Route path="/patrulla" element={<Patrulla />} />
        <Route path="/oracion" element={<Oracion />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
