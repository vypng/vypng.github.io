import headshot from "../assets/img/headshot.png";
import babypic1 from "../assets/img/babypic1.png";
import babypic2 from "../assets/img/babypic2.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <div className="row align-items-center">
                {/* Left Column - Pictures */}
                <div className="col-md-6">
                  <div className="row">
                    {/* Inner Left Column - Vertical Image */}
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <img
                        src={headshot}
                        alt="Headshot"
                        style={{
                          width: "90%",
                          objectFit: "cover",
                          borderRadius: "10px",
                          marginLeft: "30px"
                        }}
                      />
                    </div>
                    {/* Inner Right Column - Stacked Images */}
                    <div className="col-6 d-flex flex-column gap-3">
                      <img
                        src={babypic1}
                        alt="Baby picture"
                        style={{
                          width: "75%",
                          borderRadius: "10px",
                        }}
                      />
                      <img
                        src={babypic2}
                        alt="Baby picture"
                        style={{
                          width: "75%",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Text */}
                <div className="col-md-6 text-center">
                  <h2>about me</h2>
                  <p>
                    I’m a senior at The University of Texas at Dallas studying
                    Computer Science, earning my certificate in Applied Experience
                    Design and Research! Leading the front-end team in all of my
                    previous projects, I have always gravitated towards the design
                    process and have always deeply valued the user.
                  </p>
                  <p>
                    My coursework includes classes like Design Research Methods,
                    Interaction Design, and Topics in Design. Outside of academics, I
                    enjoy creating and viewing traditional and digital art, playing
                    video games, and spending time with my beagle!
                  </p>
                  {/* Social Icons */}
                  <div
                    className="social-icons"
                    style={{
                      marginTop: "3.5rem"
                    }}
                  >                    
                  <a
                      href="https://www.linkedin.com/in/vy-nguyen-86204a1b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-icon"
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
                      className="github-icon"
                      style={{
                        fontSize: "2rem",
                        margin: "0 0 0 20px",
                      }}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
