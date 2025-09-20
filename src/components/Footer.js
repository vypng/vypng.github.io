import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-start">
              <div
                className="social-icons-reverse"
                  style={{
                    marginTop: "3.5rem"
                  }}
                >   
              <p>
                Contact me!
                <br />
                <FaEnvelope
                  style={{
                    marginRight: "8px",
                    verticalAlign: "middle",
                    fontSize: "1.2rem",
                  }}
                />                
                vypnguyen2003@gmail.com
              </p>
              </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
                  <div
                    className="social-icons-reverse"
                    style={{
                      marginTop: "3.5rem"
                    }}
                  >                    
                  <a
                      href="https://www.linkedin.com/in/vy-nguyen-86204a1b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-icon-reverse"
                      style={{
                        fontSize: "2rem",
                        margin: "0 20px 0 0",
                      }}
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/vypng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-icon-reverse"
                      style={{
                        fontSize: "2rem",
                        margin: "0 0 0 20px",
                      }}
                    >
                      <FaGithub />
                    </a>
                </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}