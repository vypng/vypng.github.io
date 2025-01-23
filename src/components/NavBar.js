import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import externallink from "../assets/img/external-link.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to the correct section when the location changes
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
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(hash);
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
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* About Section */}
            <Nav.Link
              href="/#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handleNavigation("#about")}
            >
              about
            </Nav.Link>

            {/* Projects Section */}
            <Nav.Link
              href="/#projects"
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
              className="navbar-link"
            >
              resumé
              <img 
                src={externallink} 
                alt="External link icon" 
                className="external-link-icon" 
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
