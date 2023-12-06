import Home from "./components/Pages/Home";
import Navbar from "./components/Navbar/";
import Skills from "./components/Pages/Skills/";
import About from "./components/Pages/About/";
import Projects from "./components/Pages/Projects/";
import Contact from "./components/Pages/Contact/";
import "./styles/css/main.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
