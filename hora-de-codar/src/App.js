import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import React from "react"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='empresa' element={<Empresa />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

