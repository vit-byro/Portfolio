import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
