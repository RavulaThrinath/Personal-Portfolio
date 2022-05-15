import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Header from "./Components/Navbar/Header/Header";
import Blog from "./Pages/Blog/Blog";
import TsParticles from "./Components/Particles/TsParticles";
import AnimatedCursor from "./Components/Cursor/Cursor";
import BlogPost1 from "./Components/BlogPosts/BlogPost1";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import Footer from "./Components/Footer/Footer";
// import Preloader from "./Components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import "animate.css";

function App() {
  // const [load, upadateLoad] = useState(true);

  return (
    <Router>
      <div className="app">
        <TsParticles />
        <ScrollTop />
        <AnimatedCursor />
        <Header />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
