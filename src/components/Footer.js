import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' , padding: '5px'}} />
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
            <p>Thanks for stopping by! ♡</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}