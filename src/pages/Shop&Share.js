import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../App.css';
import ss1 from "../assets/img/ss_1.png";
import ss2 from "../assets/img/ss_2.png";
import ss3 from "../assets/img/ss_3.png";
import ss4 from "../assets/img/ss_4.png";
import { useEffect, useRef, useState } from "react";
import TOC from "../assets/img/TOC.png";
import lightbulb from "../assets/img/lightbulb.png";
import SurveyData1 from "../assets/img/ss_survey1.png";
import SurveyData2 from "../assets/img/ss_survey2.png";
import Wireframes from "../assets/img/ss_wireframes.png";
import UserFlow from "../assets/img/ss_userflow.png";
import Bulb from "../assets/img/bulb.png";
import HighRes from "../assets/img/ss_highres.png";
import Moodboard from "../assets/img/ss_moodboard.png";
import Branding from "../assets/img/ff_branding.png";
import ListsFeature from "../assets/videos/Lists.mp4";
import DietaryRestrictionFeature from "../assets/videos/DietaryRestrictions.mp4";
import Demo from "../assets/videos/Shop&Share.mp4";



const ShopShare = () => {
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


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const walk = (x - startX) * 2;
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
              <h5 className="project-intro">SHOP&SHARE APP DESIGN</h5>
              <h1 className="project-main-title">Shop Easy, Share <p> Easy. </p> </h1>
            </Col>

            {/* Timeline */}
            <Col md={3} className="timeline-col">
              <div className="timeline">
                <h5 className="project-subheading">TIMELINE</h5>
                <p className="project-text">Aug. 2022 - Dec. 2022</p>
              </div>
            </Col>

            {/* Role */}
            <Col md={3} className="role-col">
              <div className="role">
                <h5 className="project-subheading">ROLE</h5>
                <p className="project-text">UI/UX Designer</p>
                <p className="project-text">Front-End Developer</p>
              </div>
            </Col>

            {/* Skills */}
            <Col md={3} className="skills-col">
              <div className="skills">
                <h5 className="project-subheading">SKILLS</h5>
                <p className="project-text">User Research</p>
                <p className="project-text">Interaction Design</p>
                <p className="project-text">Information Architecture</p>
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
                  src={ss4}
                  alt="furfamily Training" 
                  className="carousel-img" 
                />
                <img 
                  src={ss3}
                  alt="furfamily Calendar" 
                  className="carousel-img" 
                />
                <img 
                  src={ss2}
                  alt="furfamily Home" 
                  className="carousel-img" 
                />
                <img 
                  src={ss1}
                  alt="furfamily Household" 
                  className="carousel-img" 
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
                        <button  onClick={() => scrollToSection("#problem")} className="toc-section">The Problem</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <button  onClick={() => scrollToSection("#research")} className="toc-section">Research</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <button  onClick={() => scrollToSection("#designing")} className="toc-section">Designing</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">4</span> 
                        <button  onClick={() => scrollToSection("#solution")} className="toc-section">The Solution</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">5</span> 
                        <button  onClick={() => scrollToSection("#final-product")} className="toc-section">Final Product</button>
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
                        <button  onClick={() => scrollToSection("#problem")} className="toc-section">The Problem</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <button  onClick={() => scrollToSection("#research")} className="toc-section">Research</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <button  onClick={() => scrollToSection("#designing")} className="toc-section">Designing</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">4</span> 
                        <button  onClick={() => scrollToSection("#solution")} className="toc-section">The Solution</button>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">5</span> 
                        <button  onClick={() => scrollToSection("#final-product")} className="toc-section">Final Product</button>
                    </li>
                </ul>
            </Col>
          </Row>


          {/* Sections with IDs */}
          <div id="problem" className="section" style= {{backgroundColor: "#D1CAFF"}}>
            <Container>
              <h2 className="proj-section-header">01. The Problem</h2>
              <div className="project-section-margins">
                <div className="left-align-details">At times, it can get difficult to manage grocery lists in households...</div>
                <p className="center-details" style={{fontSize: "22px"}}>
                As college students, my peers and I have seen how challenging it can be for friends or roommates to manage shared grocery lists and dietary needs. Shop&Share was inspired by these experiences, offering a solution to <span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#5747B9"}}>streamline grocery planning</span></span>
                  , track allergies and preferences, and<span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#5747B9"}}>minimize waste</span></span> <span> </span>
                  with expiration reminders.
                </p>
                 
                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>The Challenge</h5>
                <div>How will I design an app that simplifies grocery management, accommodates dietary needs, and reduces food waste for households and roommates?
                </div>
              </div>
            </Container>
          </div>



          <div id="research" className="section">
            <Container>
              <h2 className="proj-section-header">02. Research</h2>
              <div className="project-section-margins">
                <p className="left-align-details">Discussing amongst ourselves and a few of our friends who are also college students, we identified a few pain points...</p>
                <div className="idea" style={{backgroundColor:"#E3E2F9"}}>
                  <p>Food waste increases due to forgotten items nearing expiration in the fridge.
                  </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Add notifications for items nearing their expiration dates to help reduce waste.</div>
                </div>
                <div className="idea" style={{backgroundColor:"#E3E2F9"}}>
                  <p>College students and students living at home with their family struggle to keep track of what everyone wants when they go grocery shopping.
                  </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Allow users to create and share grocery lists that update in real-time for all members.</div>
                </div>
                <div className="idea" style={{backgroundColor:"#E3E2F9"}}>
                  <p>Roommates can forget others' dietary preferences and allergies when shopping.
                  </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Include a section in each grocery list that highlights dietary needs and allergies of all shared users.                  </div>
                </div>
                <p style={{marginTop: "150px", marginBottom: "40px"}}>I surveyed over 100 college students on my campus to gather their opinions and assess their current experiences with the issue.</p>
                <img src={SurveyData1} alt="Survey data"/>
                <img src={SurveyData2} alt="Survey data"/>
                <p className="description-text">Survey results taken from 100+ college students on our campus.</p>

                <p style={{marginTop: "150px", marginBottom: "40px"}}>I narrowed down my research to identify what students needed the most.</p>
                <div class="chat-container">
                  <div class="chatbox tenth">
                    <p class="chatbox-text-left">I want to keep my grocery lists in one place.</p>
                  </div>
                  <div class="chatbox eleventh">
                    <p class="chatbox-text-right">How can I remember all my roommates' dietary restrictions?</p>
                  </div>
                  <div class="chatbox twelfth">
                    <p class="chatbox-text-left">I need to remember to use groceries before they expire.</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>



          <div id="designing" className="section" style={{backgroundColor: "white"}}>
            <Container>
              <h2 className="proj-section-header">03. Designing</h2>
              <div className="project-section-margins">

              <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>Wireframes</h5>
                <div>I first created a basic user flow and sketched out wireframes.
                <img src={UserFlow} style={{marginTop: "30px"}} alt="User Flow for Shop&Share"/>
                <p className="description-text">User Flow for Shop&Share.</p>
                <img src={Wireframes} style={{marginTop: "30px"}} alt="Wireframes for Shop&Share"/>
                <p className="description-text">Wireframes for Shop&Share.</p>
                </div>

                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>Moodboard</h5>
                <div>I then compiled a moodboard for our app. Our team decided on black, purple, and white as our color palette to create a modern, inviting, and visually appealing interface.
                <img src={Moodboard} style={{marginTop: "30px"}} alt="Moodboard for Shop&Share"/>
                <p className="description-text">Moodboard for Shop&Share.</p>
                </div>


                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>High-Res Designs</h5>
                <div>Based on feedback from our team lead and mentor, I developed the final, high-res designs for Shop&Share.</div>
                <img src={HighRes} alt="High-Res designs" style={{marginTop: '30px'}}/>
                <p className="description-text">High-res designs.</p>

                                
              </div>            
            </Container>
          </div>



          <div id="solution" className="section" style={{backgroundColor: "#5747B9", color: "white"}}>
            <Container>
              <h2 className="proj-section-header">04. The Solution</h2>
              <div className="project-section-margins">

                <h5 class="feature-title">Dietary Restrictions</h5>
                <div className="two-column-section">
                  <div className="left-column">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                  <source src={DietaryRestrictionFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    Select pre-written dietary restrictions and preferences, or create your own! View your own or your friend's preferences at any time.
                    </div>
                  </div>
                </div>


                <h5 class="feature-title" style={{textAlign: "right"}}>Shared Grocery Lists</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <div className="centered-text">
                        Create and add friends to your grocery lists, to be updated in real-time. Items listed can be detailed with sections such as brand, store, and expiration date. Students will be notified of items nearing expiry.
                    </div>                  
                    </div>
                  <div className="right-column">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                  <source src={ListsFeature} type="video/mp4" />
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
                <p>View the final product demo below! You can read more about the project <a href="https://github.com/acm-projects/Shop-and-Share" target="_blank" rel="noopener noreferrer">here</a>.</p>
                <div className="video-container">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false} style={{height: "1000px"}}>
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

export default ShopShare;
