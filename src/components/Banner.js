import { Container, Button } from "react-bootstrap";
import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow2.png";
import externallink from "../assets/img/external-link.png"

export const Banner = () => {
  return (
    <section
      className="banner"
      id="home"
      style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
    <img className="background-image-left" src={arrow1}></img>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", maxWidth: "500px" }}>
            <p style={{ color: "black", fontSize: "1.5rem", margin: 0, textAlign: "left" }}>hi, i'm</p>
          </div>
          <h1
            style={{
              color: "#1C2B54",
              fontSize: "6rem",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "Pally, sans-serif",
              letterSpacing: "4px",
            }}
          >
            vy nguyen
          </h1>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", maxWidth: "500px" }}>
            <p style={{ fontSize: "1.5rem", margin: 0, textAlign: "left" }}></p>
            <p style={{ color: "black", fontSize: "1.5rem", margin: "1rem 0 5rem 0", textAlign: "right" }}>
              ui/ux designer
            </p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Button href="#about" className="custom-button">
              about
            </Button>
            <Button href="#projects" className="custom-button">
              projects
            </Button>
            <Button href="https://drive.google.com/file/d/1--gvaEWg9NYi95c94mAqWf7UTo3Za1Eo/view?usp=sharing" target="_blank" className="custom-button">
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
      <img className="background-image-right" src={arrow2}></img>
    </section>
  );
};
