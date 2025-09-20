import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../App.css';
import hbo1 from "../assets/img/hbo_1.png";
import hbo2 from "../assets/img/hbo_2.png";
import hbo3 from "../assets/img/hbo_3.png";
import hbo4 from "../assets/img/hbo_4.png";
import hbo5 from "../assets/img/hbo_5.png";
import { useEffect, useRef, useState } from "react";
import TOC from "../assets/img/TOC.png";
import lightbulb from "../assets/img/lightbulb.png";
import Interview1 from "../assets/img/hbo_interview1.png";
import Interview2 from "../assets/img/hbo_interview2.png";
import SurveyData from "../assets/img/hbo_survey.png";
import Wireframes from "../assets/img/ee_wireframes.png";
import Bulb from "../assets/img/bulb.png";
import Exclamation from "../assets/img/exclamation.png";
import Testing1 from "../assets/img/ee_ut1.png";
import Testing2 from "../assets/img/ee_ut2.png";
import Branding from "../assets/img/hbo_branding.png";
import HealthTracker from "../assets/videos/Health_Tracker.mp4";
import Calendar from "../assets/videos/Calendar.mp4";
import HealthWalkthroughs from "../assets/videos/Health_Walkthroughs.mp4";
import FamilyTree from "../assets/videos/Family_Tree.mp4";
import Demo from "../assets/videos/HealthBankOne.mp4";




const HealthBankOne = () => {
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

  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  

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
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content Section */}
      <section className="project-details">
        <Container>
          <Row className="project-header">
            {/* First Column for Title */}
            <Col md={3} className="project-title-col">
              <h5 className="project-intro">HEALTH BANK ONE APP DESIGN</h5>
              <h1 className="project-main-title">Reimagining the Patient Experience</h1>
            </Col>

            {/* Timeline */}
            <Col md={3} className="timeline-col">
              <div className="timeline">
                <h5 className="project-subheading">TIMELINE</h5>
                <p className="project-text">Jan. 2025 - May 2025</p>
              </div>
            </Col>

            {/* Role */}
            <Col md={3} className="role-col">
              <div className="role">
                <h5 className="project-subheading">ROLE</h5>
                <p className="project-text">Lead Developer</p>
                <p className="project-text">Designer</p>
              </div>
            </Col>

            {/* Skills */}
            <Col md={3} className="skills-col">
              <div className="skills">
                <h5 className="project-subheading">SKILLS</h5>
                <p className="project-text">Product Design</p>
                <p className="project-text">Prototyping</p>
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
                  src={hbo1}
                  alt="Health Bank One Home" 
                  className="carousel-img" 
                />
                <img 
                  src={hbo2}
                  alt="Health Bank One Calendar" 
                  className="carousel-img" 
                />
                <img 
                  src={hbo3}
                  alt="Health Bank One Tracker Overview"  
                  className="carousel-img" 
                />
                <img 
                  src={hbo4}
                  alt="Health Bank One Tracker Example" 
                  className="carousel-img" 
                />
                <img 
                  src={hbo5}
                  alt="Health Bank One Family Tree Add Relative" 
                  className="carousel-img" 
                />
              </div>
            </Col>

            {/* Table of Contents */}
            <Col md={3} style={{ paddingTop: "130px", paddingLeft: "70px", position: "relative", width: "20%"}} className="d-none d-md-block">
                <h5 style={{ display: "flex", alignItems: "center" }}>
                    <img src={TOC} alt="Table of Contents" className="toc-img" />
                    <div style={{ fontFamily: "manrope-bold" }}>Table of Contents</div>
                </h5>
                <ul className='toc-list'>
                    <li style={{ borderTop: "2px solid #BEBCBE"}} className="toc-item">
                        <span className="toc-number">1</span> 
                        <button  onClick={() => scrollToSection("#issue")} className="toc-section">The Issue</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <button onClick={() => scrollToSection("#research")} className="toc-section">Research</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <button onClick={() => scrollToSection("#ideation-design")} className="toc-section">Ideation & Design</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">4</span> 
                        <button onClick={() => scrollToSection("#solution")} className="toc-section">The Solution</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">5</span> 
                        <button onClick={() => scrollToSection("#final-product")} className="toc-section">Final Product</button>
                    </li>
                </ul>
            </Col>

            {/* Responsive TOC */}
            <Col xs={12} className="d-block d-md-none" style={{ marginTop: "100px" }}>
                <h5 style={{ display: "flex", alignItems: "center" }}>
                  <img src={TOC} alt="Table of Contents" className="toc-img" />
                  <div style={{ fontFamily: "manrope-bold" }}>Table of Contents</div>        
                </h5>
                <ul className='toc-list'>
                    <li style={{ borderTop: "2px solid #BEBCBE"}} className="toc-item">
                        <span className="toc-number">1</span> 
                        <button  onClick={() => scrollToSection("#issue")} className="toc-section">The Issue</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <button onClick={() => scrollToSection("#research")} className="toc-section">Research</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <button onClick={() => scrollToSection("#ideation-design")} className="toc-section">Ideation & Design</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">4</span> 
                        <button onClick={() => scrollToSection("#solution")} className="toc-section">The Solution</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">5</span> 
                        <button onClick={() => scrollToSection("#final-product")} className="toc-section">Final Product</button>
                    </li>
                </ul>
            </Col>
          </Row>


          {/* Sections with IDs */}
          <div id="issue" className="section" style= {{backgroundColor: "#CFEBFF"}}>
            <Container>
              <h2 className="proj-section-header">01. The Issue</h2>
              <div className="project-section-margins">
                <div className="left-align-details">Health Bank One came to us with an issue...</div>
                <p className="center-details">
                  They help their users, particularly <span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#1E88A2"}}>middle-aged women</span></span>
                  , gain control of their medical records by developing a patient-controlled information system, one in which their records are consolidated and in which they control when and where their info is shared. However, the app struggles to maintain consistent user engagement. <span> </span>
                </p>
                <h5 className="left-align-details" style={{fontFamily: "manrope-bold"}}>The Challenge</h5>
                <div>How will we drive habitual use of the Health Bank One app and push its perception as an essential tool for managing one's health?
                </div>
              </div>
            </Container>
          </div>



          <div id="research" className="section">
            <Container>
              <h2 className="proj-section-header">02. Research</h2>
              <div className="project-section-margins">
                <p className="left-align-details">We first wanted to uncover the expectations, motivations, preferences, and any challenges users of the Health Bank One app may have. Our research team narrowed down their target audience to middle-aged, proactive, and health-concerned women, and I helped conduct preliminary research.</p>
                <div className="idea" style={{backgroundColor:"#E0F0F8"}}>
                  <p>Despite facing major physical and mental health changes, women aged 40–60 often lack tools tailored to their unique needs. </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Midlife women are underserved in digital health.                    
                    </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E0F0F8"}}>
                  <p>Many women juggle work, caregiving, and health challenges—so apps should be easy to use, motivational, and built around their lifestyle, not the other way around.
                  </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Self-care must be flexible, realistic, & empowering.                  
                    </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E0F0F8"}}>
                  <p>Clear design, secure data practices, and gentle tools like reminders and symptom tracking can make users keep coming back.
                  </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Trust, usability, & encouragement drive engagement.                  
                    </div>
                </div>

                <p style={{marginTop: "150px", marginBottom: "40px"}}>We continued our research by surveying 75+ women. Additionally, we conducted five user interviews, with each team member speaking to one individual representative of our target demographic.</p>
                <img style={{marginTop: "80px", width: "70%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto"}} src={SurveyData} alt="Survey data"/>
                <p className="description-text">Statistics gathered from survey.</p>
                <img style={{marginTop: "80px", width: "70%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto"}} src={Interview1} alt="Statistics gathered from interviews"/>
                <p className="description-text">Statistics gathered from interviews.</p>


                <p style={{marginTop: "150px", marginBottom: "40px"}}>Our team's research gave us key insights to inform our design.</p>
                <div class="chat-container">
                  <div class="chatbox thirteenth">
                    <p class="chatbox-text-left">I want to keep track of my health and get suggestions.</p>
                  </div>
                  <div class="chatbox fourteenth">
                    <p class="chatbox-text-right">I need an easier way to log stuff and to be reminded.</p>
                  </div>
                  <div class="chatbox fifteenth">
                    <p class="chatbox-text-left">Is there a way for my healthcare providers to communicate?</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>



          <div id="ideation-design" className="section" style={{backgroundColor: "white"}}>
            <Container>
              <h2 className="proj-section-header">03. Ideation & Design</h2>
              <div className="project-section-margins">


                <h5 className="left-align-details" style={{fontFamily: "manrope-bold"}}>Brand Identity</h5>
                <div>We rebranded to create a more welcoming and trustworthy experience. Updates like a calmer teal palette, a fingerprint logo, intuitive navigation, and renaming our AI to “Care Bot” help the app feel more personal, secure, and user-friendly. 
                </div>
                <img src={Branding} alt="Style guide including logos and brand colors" style={{marginTop: '30px'}}/>
                <p className="description-text">Style guide for Health Bank One.</p>

                                
              </div>            
            </Container>
          </div>



          <div id="solution" className="section" style={{backgroundColor: "#106C8B", color: "white"}}>
            <Container>
              <h2 className="proj-section-header">04. The Solution</h2>
              <div className="project-section-margins">

                <h5 class="feature-title">Health Metrics Tracker</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                    <source src={HealthTracker} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    Tracking key health metrics empowers users to stay actively involved in their wellness journey, making the app more useful in their daily routines—this consistent interaction boosts both engagement and long-term retention.                    </div>
                  </div>
                </div>


                <h5 class="feature-title" style={{textAlign: "right"}}>Calendar & Medical Portal Integration</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <div className="centered-text">
                    Integrating with medical portals into a calendar and adding reminders keeps users organized and informed, reducing missed appointments and making the app an essential part of managing their health—leading to higher engagement and retention.                    </div>
                  </div>
                  <div className="right-column">
                    <video autoPlay loop muted webkit-playsinline playsInline controls={false}> 
                    <source src={Calendar} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>


                <h5 class="feature-title">Health Walkthroughs</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                    <source src={HealthWalkthroughs} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    Walkthroughs for various procedures and screenings will give users a clear understanding of what to expect at each step, helping reduce anxiety and confusion—building trust in the app and encouraging continued use.                    </div>
                  </div>
                </div>

                <h5 class="feature-title" style={{textAlign: "right"}}>Medical History Family Tree</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <div className="centered-text">
                    The Medical History Family Tree helps users visualize hereditary health patterns, making it easier to share relevant information with providers—adding long-term value and encouraging users to return to update and explore their records.
                    </div>
                    </div>
                  <div className="right-column">
                    <video autoPlay loop muted webkit-playsinline playsInline controls={false}> 
                    <source src={FamilyTree} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                            
              </div>
            </Container>
          </div>
          


          <div id="final-product" className="section" style={{backgroundColor: "black", color: "white"}}>
            <Container>
              <h2 className="proj-section-header">05. Final Product</h2>
              <div className="project-section-margins">
                <p>View the final product demo below!</p>
                <div className="video-container">
                  <video autoPlay loop muted playsInline controls={false} style={{height: "650px", marginTop: "50px"}}>
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

export default HealthBankOne;
