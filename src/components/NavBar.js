import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { ScrollContext } from "../App";
import logo from "../assets/img/logo.svg";
import externallink from "../assets/img/external-link.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setScrollTarget } = useContext(ScrollContext);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (hash) => {
    if (location.pathname !== "/") {
      setScrollTarget(hash);
      navigate("/");
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "auto", padding: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark" variant="dark">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-end">
            {/* About Section */}
            <Nav.Link
              as="button"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handleNavigation("#about")}
            >
              about
            </Nav.Link>

            {/* Projects Section */}
            <Nav.Link
              as="button"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => handleNavigation("#projects")}
            >
              projects
            </Nav.Link>

            {/* Resume Section */}
            <Nav.Link
              href="https://drive.google.com/file/d/1--gvaEWg9NYi95c94mAqWf7UTo3Za1Eo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link d-inline-flex align-items-center justify-content-center"
            >
              <span>résumé</span>
              <img 
                src={externallink} 
                alt="External link icon" 
                className="external-link-icon ms-1" 
                style={{ width: "14px", height: "14px" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
