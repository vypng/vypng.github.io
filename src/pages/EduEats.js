import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../App.css';
import eduEats1 from "../assets/img/eduEats1.png";
import eduEats2 from "../assets/img/eduEats2.png";
import eduEats3 from "../assets/img/eduEats3.png";
import eduEats4 from "../assets/img/eduEats4.png";
import { useEffect, useRef, useState } from "react";
import TOC from "../assets/img/TOC.png";
import lightbulb from "../assets/img/lightbulb.png";
import AffinityDiagram from "../assets/img/ee_affinitydiagram.png";
import SurveyData from "../assets/img/ee_surveydata.png";
import Wireframes from "../assets/img/ee_wireframes.png";
import Bulb from "../assets/img/bulb.png";
import Exclamation from "../assets/img/exclamation.png";
import Testing1 from "../assets/img/ee_ut1.png";
import Testing2 from "../assets/img/ee_ut2.png";
import Moodboard from "../assets/img/ee_moodboard.png";
import Branding from "../assets/img/ee_branding.png";
import GPSFeature from "../assets/videos/GPS_Feature.mp4";
import MealsFeature from "../assets/videos/Meals_Feature.mp4";
import SupportFeature from "../assets/videos/Support_Feature.mp4";
import Demo from "../assets/videos/eduEats.mp4";




const EduEats = () => {
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
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content Section */}
      <section className="project-details">
        <Container>
          <Row className="project-header">
            {/* First Column for Title */}
            <Col md={3} className="project-title-col">
              <h5 className="project-intro">EDUEATS APP DESIGN</h5>
              <h1 className="project-main-title">Addressing College Food Insecurity</h1>
            </Col>

            {/* Timeline */}
            <Col md={3} className="timeline-col">
              <div className="timeline">
                <h5 className="project-subheading">TIMELINE</h5>
                <p className="project-text">Aug. 2024 - Dec. 2024</p>
              </div>
            </Col>

            {/* Role */}
            <Col md={3} className="role-col">
              <div className="role">
                <h5 className="project-subheading">ROLE</h5>
                <p className="project-text">UX Researcher</p>
                <p className="project-text">UI/UX Designer</p>
              </div>
            </Col>

            {/* Skills */}
            <Col md={3} className="skills-col">
              <div className="skills">
                <h5 className="project-subheading">SKILLS</h5>
                <p className="project-text">Product Design</p>
                <p className="project-text">User Research</p>
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
                  src={eduEats1}
                  alt="eduEats Home" 
                  className="carousel-img" 
                />
                <img 
                  src={eduEats2}
                  alt="eduEats Locate" 
                  className="carousel-img" 
                />
                <img 
                  src={eduEats3}
                  alt="eduEats Meals" 
                  className="carousel-img" 
                />
                <img 
                  src={eduEats4}
                  alt="eduEats Recipe" 
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
                        <a href="#area-of-concern" className="toc-section">The Area of Concern</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <a href="#researching" className="toc-section">Researching</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <a href="#ideation-design" className="toc-section">Ideation & Design</a>
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
                        <a href="#area-of-concern" className="toc-section">The Area of Concern</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">2</span> 
                        <a href="#researching" className="toc-section">Researching</a>
                    </li>
                    <li className="toc-item">
                        <span className="toc-number">3</span> 
                        <a href="#ideation-design" className="toc-section">Ideation & Design</a>
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
          <div id="area-of-concern" className="section" style= {{backgroundColor: "#DDE7D0"}}>
            <Container>
              <h2 className="proj-section-header">01. The Area of Concern</h2>
              <div className="project-section-margins">
                <div className="left-align-details">From a recent survey done at my university...</div>
                <p className="center-details">
                  Out of 100 students surveyed, “27% respondents said they had to<span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#365E32"}}>cut the size of their meals or skip meals</span></span> <span> </span>
                  in the last 30 days because <span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#365E32"}}> wasn’t enough money for food</span></span>.
                  21% respondents 
                  said that, in the last 30 days, they were hungry but didn’t eat because there 
                  wasn’t enough money for food."
                  <p style={{marginTop: "60px", marginBottom: "40px"}}>That's <span> </span>
                    <strong style={{textDecoration: "underline"}}>a lot</strong> of hungry students!
                  </p>
                </p>
                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>The Challenge</h5>
                <div>How will I design a product that helps food-insecure 
                  college students get the support that they need?
                </div>
              </div>
            </Container>
          </div>



          <div id="researching" className="section">
            <Container>
              <h2 className="proj-section-header">02. Researching</h2>
              <div className="project-section-margins">
                <p className="left-align-details">To better understand the problem, I started looking at articles exploring different areas of the issue.</p>
                <div className="idea" style={{backgroundColor:"#E7EBE7"}}>
                  <p>Out of 100+ students surveyed at a given university, half were food insecure yet less than a quarter used food assistance programs (Simon et al., 2018). </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Students have limited awareness of the resources available to them.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E7EBE7"}}>
                  <p>Food insecure students report feeling isolated, embarrassed, and undeserving of help, leading to social and academic struggles (Meza et al., 2019). </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Food insecurity heavily affects student’s daily lives in all aspects.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E7EBE7"}}>
                  <p>Food pantries have limited reach due to inconvenient hours and stigma. Many students are unaware of their SNAP eligibility (McCoy et al., 2022).</p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Current interventions are not as effective as some would like.
                  </div>
                </div>
                <p style={{marginTop: "150px", marginBottom: "40px"}}>I also conducted interviews with four college students across the United States to gather sentiments regarding the issue.</p>
                <img src={AffinityDiagram} alt="Affinity diagram of quotes taken from interviews"/>
                <p className="description-text">Affinity diagram of quotes taken from interviews.</p>

                <p style={{marginTop: "150px", marginBottom: "40px"}}>For even more data, I sent out a survey to students at my university with questions regarding their preferences for the solution’s potential features.</p>
                <img src={SurveyData} alt="Survey data"/>
                <p className="description-text">26 students rated each feature on a scale from 1-10, 1 being least valuable and 10 being most valuable.</p>

                <p style={{marginTop: "150px", marginBottom: "40px"}}>My research gave me key insights about what my users would need!</p>
                <div class="chat-container">
                  <div class="chatbox first">
                    <p class="chatbox-text-left">I want to learn to eat healthier.</p>
                  </div>
                  <div class="chatbox second">
                    <p class="chatbox-text-right">I need a way to find resources in times of need.</p>
                  </div>
                  <div class="chatbox third">
                    <p class="chatbox-text-left">How do I ask for support when I’m too embarrassed to?</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>



          <div id="ideation-design" className="section" style={{backgroundColor: "white"}}>
            <Container>
              <h2 className="proj-section-header">03. Ideation & Design</h2>
              <div className="project-section-margins">
                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>Wireframing</h5>
                <div>I used a rough set of wireframes to perform usability testing.
                <img src={Wireframes} style={{marginTop: "30px"}} alt="Affinity diagram of quotes taken from interviews"/>
                <p className="description-text">Low-fidelity wireframes used for usability testing.</p>
                </div>

                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold", marginTop: "130px"}}>Testing</h5>
                <div>I asked two students to test my app and observed as they performed certain tasks.
                </div>

                <div className="yellow-box">
                  <div className="row issue">
                    <div className="text-content">
                      <div className="title">
                        <img src={Bulb} alt="Lightbulb Icon" className="icon" />
                        <span className="label">Issue:</span> Finding events
                      </div>
                      <p>
                        Upon asking a user to find a discussion or information about a campus event, the user was unsure and could not complete the task in a reliable manner.
                      </p>
                    </div>
                  </div>
                  <div className="row solution">
                    <div className="text-content">
                      <div className="title">
                        <img src={Exclamation} alt="Exclamation Point" className="icon" />
                        <span className="label">Solution:</span> Create a separate section for campus events
                      </div>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src={Testing1} alt="Events feature testing" className="center-image" style={{width: "50%", marginBottom: "30px"}}/>
                  </div>
                </div>

                <div className="yellow-box">
                  <div className="row issue">
                    <div className="text-content">
                      <div className="title">
                        <img src={Bulb} alt="Lightbulb Icon" className="icon" />
                        <span className="label">Issue:</span> Unclear Icons
                      </div>
                      <p>
                      Users could not identify which icon stored which component.</p>
                    </div>
                  </div>
                  <div className="row solution">
                    <div className="text-content">
                      <div className="title">
                        <img src={Exclamation} alt="Exclamation Point" className="icon" />
                        <span className="label">Solution:</span> Explicitly state icon names
                      </div>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src={Testing2} alt="Icon titles testing" className="center-image" style={{width: "70%", marginBottom: "30px"}}/>
                  </div>
                </div>


                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold", marginTop: "130px"}}>Brand Identity</h5>
                <div>I wanted the app to have a fun yet professional look 
                  while maintaining the appearance a health-focused app. 
                  I created a mood board to begin designing my app’s brand identity.
                </div>
                <img src={Moodboard} alt="Moodboard" style={{marginTop: '30px'}}/>
                <p className="description-text">Calming, health-focused moodboard.</p>
                <img src={Branding} alt="Style guide including logos and brand colors" style={{marginTop: '30px'}}/>
                <p className="description-text">Style guide for eduEats.</p>

                                
              </div>            
            </Container>
          </div>



          <div id="solution" className="section" style={{backgroundColor: "#365E32", color: "white"}}>
            <Container>
              <h2 className="proj-section-header">04. The Solution</h2>
              <div className="project-section-margins">
                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>Problem Statement</h5>
                <div>When a college student is facing food insecurity and 
                  struggling to manage their limited financial resources, 
                  they want to find a reliable and accessible way to locate food 
                  assistance resources, find healthy yet affordable meals, and find 
                  support from others so they can reduce stress, ensure they have 
                  access to proper nutrition, and focus on their academic career.
                </div>  

                <h5 class="feature-title">Locating Food Assistance</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <video autoPlay loop muted webkit-playsinline playsinline controls={false}>
                    <source src={GPSFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    The GPS system helps students easily locate nearby food pantries, soup kitchens, and community resources. It provides accurate directions, real-time navigation, required materials, and instructions for each location. Students can access essential services without hassle.
                    </div>
                  </div>
                </div>


                <h5 class="feature-title" style={{textAlign: "right"}}>Finding Healthy & Affordable Meals</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <div className="centered-text">
                    The meal finder makes it simple to discover budget-friendly and nutritious recipes tailored to your pantry and preferences. It allows students to save money while enjoying healthy, satisfying meals.                    
                    </div>
                  </div>
                  <div className="right-column">
                    <video autoPlay loop muted webkit-playsinline playsinline controls={false}> 
                    <source src={MealsFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>


                <h5 class="feature-title">Accessing Discreet Support</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <video autoPlay loop muted webkit-playsinline playsinline controls={false}>
                    <source src={SupportFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    The connect feature creates a supportive space for students to discuss food insecurity, share meal tips, and exchange advice on accessing resources. It’s a platform designed to foster understanding and empowerment through shared experiences.                    
                    </div>
                  </div>
                </div>

                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold", marginTop: "150px"}}>Platform Choice</h5>
                <div>Why a mobile app? The features that users asked for, 
                  such as location services, would be more intuitive and 
                  user-friendly on a mobile device as opposed to a desktop 
                  application.
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
                  <video autoPlay loop muted playsinline controls={false} style={{height: "1000px"}}>
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

export default EduEats;
