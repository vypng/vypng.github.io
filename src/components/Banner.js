import { Container, Button } from "react-bootstrap";
import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow2.png";
import externallink from "../assets/img/external-link.png";

export const Banner = () => {
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
      <img className="background-image-left" src={arrow1} alt="Decorative arrow" />
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
            <Button href="#about" className="custom-button">
              about
            </Button>
            <Button href="#projects" className="custom-button">
              projects
            </Button>
            <Button
              href="https://drive.google.com/file/d/1--gvaEWg9NYi95c94mAqWf7UTo3Za1Eo/view?usp=sharing"
              target="_blank"
              className="custom-button"
            >
              resumé
              <img
                src={externallink}
                alt="External link icon"
                className="external-link-icon"
              />
            </Button>
          </div>
        </div>
      </Container>
      <img className="background-image-right" src={arrow2} alt="Decorative arrow" />
    </section>
  );
};
