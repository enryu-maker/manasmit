import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Foter from "./components/Footer";
function App() {
  return (
    <div className="overflow-hidden font-Poppins">
      <Nav />
      <div className="mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Foter />
    </div>
  );
}

export default App;
