import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Header from "./Components/Navbar/Header/Header";
import RHeader from "./Components/Navbar/ResponsiveHeader/RHeader";
import Blog from "./Pages/Blog/Blog";
import React from "react";
import TsParticles from "./Components/Particles/TsParticles";
import Aos from "aos";
import "aos/dist/aos.css";
import BlogPost1 from "./Components/BlogPosts/BlogPost1";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
// import Cursor from "./Components/Cursor/Cursor";
import { AnimatePresence } from "framer-motion";

function App() {
  useEffect(() => {
    Aos.init({
      once: true
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div>
        <TsParticles />
        {/*<Cursor />*/}
        <ScrollTop />
        <RHeader isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/works" element={<Work />}></Route>
            <Route path="/blogs/:slug" element={<BlogPost1 />}></Route>
            <Route path="/blogs" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;


