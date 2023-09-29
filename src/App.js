import Home from "./Home";
import Impressum from "./Impressum";
import "./App.css";
import Navbar from "./navbar";

import FooterSitemapLinks from "./footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./contact";
import About2 from "./about2";
import Services from "./services";
import ScrollToTop from "./stp";
import About from "./about";
import Publication from "./publication";
import Service1 from "./service1";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/about"
            element={
              <div className="pt-8">
                <About2 /> <About />
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="pt-8 bg-[#D8D9DA]">
                <Services />
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/publication"
            element={
              <div className="">
                <Publication />
              </div>
            }
          />
          <Route path="/service1" element={<Service1 />} />
        </Routes>
        <FooterSitemapLinks />
      </Router>
    </div>
  );
}

export default App;
