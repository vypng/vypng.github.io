import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import React, { useEffect, useState, createContext, useContext } from "react";

import EduEats from "./pages/EduEats";
import FurFamily from "./pages/FurFamily";
import ShopShare from "./pages/Shop&Share";
import UnlockingDoors from "./pages/UnlockingDoors";
import HealthBankOne from "./pages/HealthBankOne";

// ✅ Create ScrollContext
export const ScrollContext = createContext();

function App() {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <ScrollContext.Provider value={{ scrollTarget, setScrollTarget }}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eduEats" element={<EduEats />} />
            <Route path="/furfamily" element={<FurFamily />} />
            <Route path="/shop-share" element={<ShopShare />} />
            <Route path="/unlocking-doors" element={<UnlockingDoors />} />
            <Route path="/health-bank-one" element={<HealthBankOne />} />
          </Routes>
        </div>
      </Router>
    </ScrollContext.Provider>
  );
}

// ✅ Homepage component with scroll logic
function HomePage() {
  const location = useLocation();
  const { scrollTarget, setScrollTarget } = useContext(ScrollContext);

  // Scroll to anchor if URL contains hash (e.g. #about)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Scroll to stored target if coming from another page
  useEffect(() => {
    if (scrollTarget) {
      const el = document.querySelector(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null);
      }
    }
  }, [scrollTarget, setScrollTarget]);

  return (
    <>
      <Banner />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </>
  );
}

export default App;
