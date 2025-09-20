import { Container, Button } from "react-bootstrap";
import externallink from "../assets/img/external-link.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ScrollContext } from "../App";

export const Banner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setScrollTarget } = useContext(ScrollContext);

  const handleScrollTo = (hash) => {
    if (location.pathname !== "/") {
      setScrollTarget(hash);
      navigate("/");
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headingStyle = {
    color: "#1C2B54",
    fontSize: "clamp(3rem, 7vw, 6rem)",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Pally, sans-serif",
    letterSpacing: "4px",
  };

  const subtitleStyle = {
    color: "black",
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    margin: "1rem 0 5rem 0",
    textAlign: "right",
  };

  const textStyle = {
    color: "black",
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    margin: 0,
    textAlign: "left",
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const buttonContainerStyle = {
    marginTop: "2rem",
    display: "flex",
  };

  return (
    <section className="banner" id="home" style={containerStyle}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{width: "33vw"}}>
            <p style={textStyle}>hi, i'm</p>
          </div>
          <h1 style={headingStyle}>vy nguyen</h1>
          <div style={{width: "33vw"}}>
            <p style={subtitleStyle}>ui/ux designer</p>
          </div>
          <div style={buttonContainerStyle}>
            <Button onClick={() => handleScrollTo("#about")} className="custom-button">
              about
            </Button>
            <Button onClick={() => handleScrollTo("#projects")} className="custom-button">
              projects
            </Button>
            <Button
              href="https://drive.google.com/file/d/1--gvaEWg9NYi95c94mAqWf7UTo3Za1Eo/view?usp=sharing"
              target="_blank"
              className="custom-button"
              style={{ fontWeight: "bold" }}
            >
              résumé
              <img
                src={externallink}
                alt="External link icon"
                className="external-link-icon"
              />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
