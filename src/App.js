import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import EduEats from "./pages/EduEats";
import FurFamily from "./pages/FurFamily";
import ShopShare from "./pages/Shop&Share";
import UnlockingDoors from "./pages/UnlockingDoors";
import HealthBankOne from "./pages/HealthBankOne";


function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
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
            }
          />

          <Route path="/eduEats" element={<EduEats />} />
          <Route path="/furfamily" element={<FurFamily />} />
          <Route path="/shop-share" element={<ShopShare />} />
          <Route path="/unlocking-doors" element={<UnlockingDoors />} />
          <Route path="/health-bank-one" element={<HealthBankOne />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
