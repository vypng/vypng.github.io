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
      description: "Redesigning a patient-controlled health record app to increase consistent engagement and establish it as an essential tool for managing personal health.",
      type: "Capstone project ∙ 2025",
      imgUrl: HealthBankOne,
      link: "/health-bank-one",
    },
    {
      title: "eduEats",
      description: "Designing a student-focused app that helps food-insecure college students access support and resources, tackling hunger on campus with a practical, easy-to-use solution.",
      type: "Design research project ∙ 2024",
      imgUrl: eduEats,
      link: "/EduEats",
    },
    {
      title: "furfamily",
      description: "Creating a pet care app that helps new pet owners access guidance, track their pets’ needs, and reduce surrender rates, especially for pandemic-era adoptions.",
      type: "Interaction design project ∙ 2024",
      imgUrl: furfamily,
      link: "/FurFamily",
    },
    {
      title: "Unlocking Doors",
      description: "Redesigning a nonprofit database to streamline information access, improve usability, and create a modern, visually appealing interface that aligns with the organization’s branding.",
      type: "Engineering project in community service ∙ 2023",
      imgUrl: UnlockingDoors,
      link: "/unlocking-doors",
    },
    {
      title: "Shop&Share",
      description: "Designing a shared grocery app that helps households and roommates manage lists, track dietary needs, and reduce food waste with smart reminders and intuitive features.",
      type: "Extracurricular project ∙ 2022",
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
                    <Col key={index} xs={12} sm={6} md={5} className="project-card mb-4">
                        <div style={{ textAlign: "left", padding: "10px" }}>
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
                            <p style={{ textAlign: "left" }}
                              className="project-description"
                            >
                              {project.description}
                            </p>
                            <p style={{ textAlign: "left" }}
                              className="project-type"
                            >
                              {project.type}
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
