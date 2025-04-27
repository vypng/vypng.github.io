import { Container, Row, Col } from "react-bootstrap";
import HealthBankOne from "../assets/img/HealthBankOne.png";
import eduEats from "../assets/img/eduEats.png";
import furfamily from "../assets/img/furfamily.png";
import UnlockingDoors from "../assets/img/UnlockingDoors.png";
import ShopShare from "../assets/img/Shop&Share.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      title: "Health Bank One",
      description: "Helping patients gain control of their medical records.",
      imgUrl: HealthBankOne,
      link: "/health-bank-one",
    },
    {
      title: "eduEats",
      description: "Student-focused app that combats food insecurity.",
      imgUrl: eduEats,
      link: "/EduEats",
    },
    {
      title: "furfamily",
      description: "Pet care app designed to help families train and track their pets.",
      imgUrl: furfamily,
      link: "/FurFamily",
    },
    {
      title: "Unlocking Doors",
      description: "Redesigning a database to help reintegrate former offenders.",
      imgUrl: UnlockingDoors,
      link: "/unlocking-doors",
    },
    {
      title: "Shop&Share",
      description: "Create and share grocery lists while tracking allergies and preferences.",
      imgUrl: ShopShare,
      link: "/shop-share",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>projects</h2>
                  <Row className="g-3 justify-content-center">
                    {projects.map((project, index) => (
                      <Col key={index} xs={12} sm={6} md={5}>
                        <div style={{ textAlign: "center", padding: "10px" }}>
                          <Link
                            to={project.link}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <img
                              src={project.imgUrl}
                              alt={project.title}
                              className="project-image"
                            />
                            <h5
                              className="project-title"
                            >
                              {project.title}
                            </h5>
                            <p
                              className="project-description"
                            >
                              {project.description}
                            </p>
                          </Link>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
