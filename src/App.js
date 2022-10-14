import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Component/ScrollToTop";
import About from "./Pages/About";
import Footer from "./Component/Footer";
import Aboutme from "./Component/AboutComponents/Aboutme";

function App() {
  return (
    <BrowserRouter>
    <div>
    <ScrollToTop />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
