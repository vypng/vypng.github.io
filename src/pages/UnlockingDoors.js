import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../App.css';
import ud1 from "../assets/img/ud_1.png";
import ud2 from "../assets/img/ud_2.png";
import ud3 from "../assets/img/ud_3.png";
import ud4 from "../assets/img/ud_4.png";
import { useEffect, useRef, useState } from "react";
import TOC from "../assets/img/TOC.png";
import lightbulb from "../assets/img/lightbulb.png";
import CurrentPages from "../assets/img/ud_current.png";
import Website from "../assets/img/ud_website.png";
import Branding from "../assets/img/ud_branding.png";
import Prototypes from "../assets/img/ud_prototypes.png"
import Filtering from "../assets/img/filtering-system.png";
import BrandConsistency from "../assets/img/brand-consistency.png";
import RoundedCorners from "../assets/img/rounded-corners.png";
import Demo from "../assets/videos/UnlockingDoors.mp4";
import { Filter } from "react-bootstrap-icons";




const UnlockingDoors = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
    window.scrollTo(0, 0);
  }, []);

  // Handle mouse down event to start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    // Disable default image drag behavior
    e.preventDefault();
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const walk = (x - startX) * 2; // Speed of dragging
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up or mouse leave event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <NavBar />

      <section className="project-details">
        <Container>
          <Row className="project-header">
            {/* First Column for Title */}
            <Col md={3} className="project-title-col">
              <h5 className="project-intro">UNLOCKING DOORS WEB DESIGN</h5>
              <h1 className="project-main-title">Rebuilding Lives</h1>
            </Col>

            {/* Timeline */}
            <Col md={3} className="timeline-col">
              <div className="timeline">
                <h5 className="project-subheading">TIMELINE</h5>
                <p className="project-text">Aug. 2023 - Dec. 2023</p>
              </div>
            </Col>

            {/* Role */}
            <Col md={3} className="role-col">
              <div className="role">
                <h5 className="project-subheading">ROLE</h5>
                <p className="project-text">UX Researcher</p>
                <p className="project-text">UI/UX Designer</p>
                <p className="project-text">Front-End Developer</p>
              </div>
            </Col>

            {/* Skills */}
            <Col md={3} className="skills-col">
              <div className="skills">
                <h5 className="project-subheading">SKILLS</h5>
                <p className="project-text">UI/UX Design</p>
                <p className="project-text">Brand Consistency</p>
                <p className="project-text">Information Architecture</p>
                <p className="project-text">Frontend Development</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Row 
            className="mb-5 d-flex align-items-start" 
            style={{ marginTop: "20px", position: "relative" }}
          >
            {/* Carousel */}
            <Col 
              md={9} 
              ref={scrollContainerRef}
              className="carousel-positioning"
              style={{
                overflowX: 'scroll',
                whiteSpace: 'nowrap',
                cursor: isDragging ? 'grabbing' : 'grab',
                width: '63vw',
                position: 'relative',
                paddingLeft: '30px',
                paddingTop: '40px',
                marginBottom: '100px'              
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div style={{ display: 'inline-block', minWidth: '100%' }}>
                <img 
                  src={ud4}
                  alt="Unlocking Doors Admin page" 
                  className="carousel-desktop" 
                />
                <img 
                  src={ud3}
                  alt="Unlocking Doors Create Contact page" 
                  className="carousel-desktop" 
                />
                <img 
                  src={ud2}
                  alt="Unlocking Doors Search page" 
                  className="carousel-desktop" 
                />
                <img 
                  src={ud1}
                  alt="Unlocking Doors Login page" 
                  className="carousel-desktop" 
                />
              </div>
            </Col>

            {/* Table of Contents */}
            <Col md={3} style={{ paddingTop: "130px", paddingLeft: "70px", position: "relative", width: "20%"}} className="d-none d-md-block">
                <h5 style={{ display: "flex", alignItems: "center" }}>
                    <img src={TOC} alt="Table of Contents" className="toc-img" />
                    <div style={{ fontFamily: "Metropolis-Bold" }}>Table of Contents</div>
                </h5>
                <ul className='toc-list'>
                    <li style={{ borderTop: "2px solid #BEBCBE"}} className="toc-item">
                        <span className="toc-number">1</span> 
                        <a href="#issue" className="toc-section">The Issue</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <a href="#requirements" className="toc-section">Requirements</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <a href="#design" className="toc-section">Design</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">4</span> 
                        <a href="#solution" className="toc-section">The Solution</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">5</span> 
                        <a href="#final-product" className="toc-section">Final Product</a>
                    </li>
                </ul>
            </Col>

            {/* Responsive TOC */}
            <Col xs={12} className="d-block d-md-none" style={{ marginTop: "100px" }}>
                <h5 style={{ display: "flex", alignItems: "center" }}>
                  <img src={TOC} alt="Table of Contents" className="toc-img" />
                  <div style={{ fontFamily: "Metropolis-Bold" }}>Table of Contents</div>        
                </h5>
                <ul className='toc-list'>
                    <li style={{ borderTop: "2px solid #BEBCBE"}} className="toc-item">
                        <span className="toc-number">1</span> 
                        <a href="#issue" className="toc-section">The Issue</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <a href="#requirements" className="toc-section">Requirements</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <a href="#design" className="toc-section">Design</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">4</span> 
                        <a href="#solution" className="toc-section">The Solution</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">5</span> 
                        <a href="#final-product" className="toc-section">Final Product</a>
                    </li>
                </ul>
            </Col>
          </Row>


          {/* Sections with IDs */}
          <div id="issue" className="section" style= {{backgroundColor: "#B5CAF6"}}>
            <Container>
              <h2 className="proj-section-header">01. The Issue</h2>
              <div className="project-section-margins">
                <div className="left-align-details">An organization originally came to UT Dallas with an issue...</div>
                <p className="center-details" style={{fontSize: "22px"}}>
                Non-profit organization, Unlocking Doors, has<span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#034EA2"}}>too many contacts</span></span> <span> </span>
                  in <span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#034EA2"}}> too many different places</span></span>, 
                  leading to inefficiencies and challenges for their team in accessing and organizing critical information. A database is
                  being developed, but the workers expressed that the interface is <span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#034EA2"}}>difficult to navigate</span></span> <span> </span>
                  and <span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#034EA2"}}>visually unappealing</span></span>.

                </p>

                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>The Challenge</h5>
                <div>How will I redesign the database so that it organizes information intuitively, improves accessibility for workers, 
                    and creates a modern, visually appealing interface that aligns with the organization’s branding?
                </div>
              </div>
            </Container>
          </div>



          <div id="requirements" className="section">
            <Container>
              <h2 className="proj-section-header">02. Requirements</h2>
              <div className="project-section-margins">
                <p className="left-align-details">I met with two of the database's users to discuss what needs to be improved.</p>
                <div className="idea" style={{backgroundColor:"#DDE3F1"}}>
                  <p>The current database interface is grey and old-fashioned.</p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Modernize the interface and choose a higher-contrast color palette.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#DDE3F1"}}>
                  <p>The current interface for editing a contact appears in a modal, but some of the information exceeds the confines of the modal. </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Create a separate page for editing a contact.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#DDE3F1"}}>
                  <p>The current database interface does not align with the organization's branding.</p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Correct colors and fonts to better represent the brand.
                  </div>
                </div>
                <p style={{marginTop: "150px", marginBottom: "40px"}}>I then reviewed the current pages of the database.</p>
                <img src={CurrentPages} alt="Current interface"/>
                <p className="description-text">Current database interface that needs fixing.</p>

                <p style={{marginTop: "150px", marginBottom: "40px"}}>The main sentiments and pain points that were echoed in our discussions...</p>
                <div class="chat-container">
                  <div class="chatbox seventh">
                    <p class="chatbox-text-left">I need all the info in one place.</p>
                  </div>
                  <div class="chatbox eigth">
                    <p class="chatbox-text-right">I want the layout to be more visually appealing.</p>
                  </div>
                  <div class="chatbox ninth">
                    <p class="chatbox-text-left">I want the interface to be easier to navigate.</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>



          <div id="design" className="section" style={{backgroundColor: "white"}}>
            <Container>
              <h2 className="proj-section-header">03. Design</h2>
              <div className="project-section-margins">
                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>Existing Branding</h5>
                <div>I viewed the Unlocking Doors website to gauge their branding style.
                <img src={Website} style={{marginTop: "30px"}} alt="Unlocking Doors Website"/>
                <p className="description-text">Images from the Unlocking Doors website.</p>
                </div>

                <div>From the existing website, I created a small style guide before I designed the database.
                </div>
                <img src={Branding} alt="Style guide including logos and brand colors" style={{marginTop: '30px'}}/>
                <p className="description-text">Style guide for Unlocking Doors.</p>

                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>Design</h5>
                <div>I aligned items, organized information into three pages accessible in the upper bar, and used the brand's style guide to improve on the previous design.
                <img src={Prototypes} style={{marginTop: "30px"}} alt="Unlocking Doors Website"/>
                <p className="description-text">Prototypes presented to organization.</p>
                Upon presenting these designs, little to no improvements were mentioned and the application's users were satisfied with the new interface!
                </div>
                                
              </div>            
            </Container>
          </div>



          <div id="solution" className="section" style={{backgroundColor: "#034EA2", color: "white"}}>
            <Container>
              <h2 className="proj-section-header">04. The Solution</h2>
              <div className="project-section-margins">
                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>Problem Statement</h5>
                <div>When an Unlocking Doors employee is using their organization's database to
                    view and find a contact for a client, they want to so easily and efficiently 
                    throughout the day without straining their eyes.
                </div>  

                <h5 class="feature-title">Rounded Corners</h5>
                <div className="two-column-section">
                  <div className="left-column">
                  <img src={RoundedCorners} alt="Rounding corners"/>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    Rounding previously harsh corners in the design helps achieve the modernized interface its users were looking for.
                    </div>
                  </div>
                </div>


                <h5 class="feature-title" style={{textAlign: "right"}}>Ensuring Brand Consistency</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <div className="centered-text">
                      Using the organization's original, high-contrast color palette allows the database to be professional, cohesive, and easy-on-the-eyes.
                    </div>
                  </div>
                  <div className="right-column">
                  <img src={BrandConsistency} alt="Brand consistency"/>
                  </div>
                </div>


                <h5 class="feature-title">Accessing Discreet Support</h5>
                <div className="two-column-section">
                  <div className="left-column">
                  <img src={Filtering} alt="Filtering system"/>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    The filtering system streamlines contact management by allowing users to quickly sort and find information using tags and groups.                    </div>
                  </div>
                </div>

                            
              </div>
            </Container>
          </div>
          


          <div id="final-product" className="section" style={{backgroundColor: "black", color: "white"}}>
            <Container>
              <h2 className="proj-section-header">05. Final Product</h2>
              <div className="project-section-margins">
               <p>
                View the final product demo below! You can read more about the project <a href="https://github.com/UTDallasEPICS/Unlocking-Doors" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
                <div className="video-container">
                  <video autoPlay loop muted webkit-playsinline playsinline style={{height: "1000px"}}>
                      <source src={Demo} type="video/mp4" className="demo"/>
                        Your browser does not support the video tag.
                  </video>
                </div>
              </div>            
            </Container>
          </div>

      </section>
      

      <Footer />
    </div>
  );
};

export default UnlockingDoors;
