import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Header from "./Components/Navbar/Header/Header";
import RHeader from "./Components/Navbar/ResponsiveHeader/RHeader";
import Blog from "./Pages/Blog/Blog"
import React from "react";
import TsParticles from "./Components/Particles/TsParticles";
import BlogPost1 from "./Components/BlogPosts/BlogPost1";
// import Cursor from "./Components/Cursor/Cursor";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div>
        <TsParticles />
        {/*<Cursor />*/}
        <RHeader isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/works" element={<About />}></Route>
          <Route path="/blogs/:slug" element={<BlogPost1 />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
