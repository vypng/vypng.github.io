import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import '../App.css';
import furfamily1 from "../assets/img/furfamily1.png";
import furfamily2 from "../assets/img/furfamily2.png";
import furfamily3 from "../assets/img/furfamily3.png";
import furfamily4 from "../assets/img/furfamily4.png";
import { useEffect, useRef, useState } from "react";
import TOC from "../assets/img/TOC.png";
import lightbulb from "../assets/img/lightbulb.png";
import AffinityDiagram from "../assets/img/ff_affinitydiagram.png";
import Wireframes from "../assets/img/ff_wireframes.png";
import Bulb from "../assets/img/bulb.png";
import Exclamation from "../assets/img/exclamation.png";
import Testing1 from "../assets/img/ff_ut1.png";
import Testing2 from "../assets/img/ff_ut2.png";
import Branding from "../assets/img/ff_branding.png";
import ChallengesFeature from "../assets/videos/Challenges_Feature.mp4";
import TrainingFeature from "../assets/videos/Training_Feature.mp4";
import CommunityFeature from "../assets/videos/Community_Feature.mp4";
import CalendarFeature from "../assets/videos/Calendar_Feature.mp4";
import HouseholdFeature from "../assets/videos/Household_Feature.mp4";
import Demo from "../assets/videos/furfamily.mp4";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import first_image from "../assets/img/bean_adult.png";
import second_image from "../assets/img/bean_baby.png";


const FIRST_IMAGE = {
  imageUrl: first_image
};
const SECOND_IMAGE = {
  imageUrl: second_image
};


const FurFamily = () => {
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
              <h5 className="project-intro">FURFAMILY APP DESIGN</h5>
              <h1 className="project-main-title">Train Smarter, Love Deeper.</h1>
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
                <p className="project-text">UI/UX Designer</p>
              </div>
            </Col>

            {/* Skills */}
            <Col md={3} className="skills-col">
              <div className="skills">
                <h5 className="project-subheading">SKILLS</h5>
                <p className="project-text">Interaction Design</p>
                <p className="project-text">Wireframing</p>
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
                  src={furfamily4}
                  alt="furfamily Training" 
                  className="carousel-img" 
                />
                <img 
                  src={furfamily3}
                  alt="furfamily Calendar" 
                  className="carousel-img" 
                />
                <img 
                  src={furfamily2}
                  alt="furfamily Home" 
                  className="carousel-img" 
                />
                <img 
                  src={furfamily1}
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
                        <button  onClick={() => scrollToSection("#inspiration")} className="toc-section">The Inspiration</button>
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
                        <button  onClick={() => scrollToSection("#inspiration")} className="toc-section">The Inspiration</button>
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
          <div id="inspiration" className="section" style= {{backgroundColor: "#D8D0E7"}}>
            <Container>
              <h2 className="proj-section-header">01. The Inspiration</h2>
              <div className="project-section-margins">
                <div className="left-align-details">Many dogs were adopted during the pandemic...</div>
                <p className="center-details" style={{fontSize: "22px"}}>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#19162B"}}>23 million U.S. households</span></span> <span> </span>
                  adopted a pet during the pandemic. Post-pandemic lifestyle changes and overall pet ownership difficulties led to <span> </span>
                  <span className="highlight"><span className="bold-highlight" style={{color:"#19162B"}}>more surrenders.</span></span>
                  <p style={{marginTop: "60px"}}>This little guy was also a pandemic puppy!</p>
                </p>

                <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100vh',
                      width: '100%',
                      width: '500px',
                      height: 'auto',
                      margin: '0 auto 100px auto',
                    }}
                  >
                    <ReactBeforeSliderComponent
                      firstImage={FIRST_IMAGE}
                      secondImage={SECOND_IMAGE}
                      currentPercentPosition="80"
                    />
                  </div>
                  
                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold"}}>The Challenge</h5>
                <div>How will I design an app that will help pet owners access useful
                  tools and guidance and lower surrender rates?
                </div>
              </div>
            </Container>
          </div>



          <div id="research" className="section">
            <Container>
              <h2 className="proj-section-header">02. Research</h2>
              <div className="project-section-margins">
                <p className="left-align-details">I started with listing some general insights surrounding my target audience.</p>
                <div className="idea" style={{backgroundColor:"#E9E7EB"}}>
                  <p><strong>Activities</strong> — What do my users already do with their dogs?</p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Teach them new tricks, schedule important appointments, and bond with them.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E9E7EB"}}>
                  <p><strong>Environment</strong> — Where do I want my users to use this app?</p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    At home, outdoors, at a vet clinic, anywhere and any time they want to check upcoming dates.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E9E7EB"}}>
                  <p><strong>Interactions</strong> — What do I want my users to do with this app?</p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Mark training progress, set and receive reminders for dates, add family members, read tips & tricks.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E9E7EB"}}>
                  <p><strong>Objects</strong> — What do my users need to use this app? </p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Smartphones and/or pet care tools or treats for training.
                  </div>
                </div>
                <div className="idea" style={{backgroundColor:"#E9E7EB"}}>
                  <p><strong>Users</strong> — What are general characteristics of my users?</p>
                  <div style={{paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <img src={lightbulb} alt="Lightbulb icon"/>
                    Dog owners and their families, especially first-time adopters.
                  </div>
                </div>
                <p style={{marginTop: "150px", marginBottom: "40px"}}>I asked friends and family to reflect on pain points they had while raising their first dog.</p>
                <img src={AffinityDiagram} alt="Affinity diagram of insights gained from interviews"/>
                <p className="description-text">Affinity diagram of insights gained from interviews.</p>

                <p style={{marginTop: "150px", marginBottom: "40px"}}>All of this gave me key insights about my users, helping me ideate the app's features and designs. </p>
                <div class="chat-container">
                  <div class="chatbox fourth">
                    <p class="chatbox-text-left">I want to teach my dog new tricks.</p>
                  </div>
                  <div class="chatbox fifth">
                    <p class="chatbox-text-right">I want simple ways to keep my dog happy and active.</p>
                  </div>
                  <div class="chatbox sixth">
                    <p class="chatbox-text-left">How can I keep track of my dog’s schedule when I’m already so busy?</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>



          <div id="designing" className="section" style={{backgroundColor: "white"}}>
            <Container>
              <h2 className="proj-section-header">03. Designing</h2>
              <div className="project-section-margins">

                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold", marginTop: "130px"}}>Testing</h5>
                <div>I asked two students to test my app and observed as they performed certain tasks.
                </div>

                <div className="yellow-box">
                  <div className="row issue">
                    <div className="text-content">
                      <div className="title">
                        <img src={Bulb} alt="Lightbulb Icon" className="icon" />
                        <span className="label">Issue:</span> Onboarding timing
                      </div>
                      <p>
                       Five users were asked "How do you feel about the timing of the onboarding pages? Do you think they should have come before the Create Account/Login screen, before, or elsewhere?".
                       2/5 users indicated they had no opinion, while 3/5 users indicated they would rather it come before.
                      </p>
                    </div>
                  </div>
                  <div className="row solution">
                    <div className="text-content">
                      <div className="title">
                        <img src={Exclamation} alt="Exclamation Point" className="icon" />
                        <span className="label">Solution:</span> Onboarding now appears upon downloading the app, before login.
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
                        <span className="label">Issue:</span> Checklist?
                      </div>
                      <p>
                      While observing the five users, all of them tried to click on the onboarding checkboxes, when they weren’t intended to be clicked. Upon asking, all users agreed that a circular element would be better.</p>
                    </div>
                  </div>
                  <div className="row solution">
                    <div className="text-content">
                      <div className="title">
                        <img src={Exclamation} alt="Exclamation Point" className="icon" />
                        <span className="label">Solution:</span> Use circles to better communicate non-actionability.
                      </div>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src={Testing2} alt="Icon titles testing" className="center-image" style={{width: "70%", marginBottom: "30px"}}/>
                  </div>
                </div>


                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold", marginTop: "130px"}}>Brand Identity</h5>
                <div>I wanted my app to be playful and friendly yet simple - just how raising a new dog should be.
                </div>
                <img src={Branding} alt="Style guide including logos and brand colors" style={{marginTop: '30px'}}/>
                <p className="description-text">Style guide for furfamily.</p>

                                
              </div>            
            </Container>
          </div>



          <div id="solution" className="section" style={{backgroundColor: "#4C4576", color: "white"}}>
            <Container>
              <h2 className="proj-section-header">04. The Solution</h2>
              <div className="project-section-margins">

                <h5 class="feature-title">Daily Challenges</h5>
                <div className="two-column-section">
                  <div className="left-column">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                  <source src={ChallengesFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    Discover daily mental, physical, and emotional activities to keep your dog happy and engaged, promoting a strong and consistent bond between you and your dog.
                    </div>
                  </div>
                </div>


                <h5 class="feature-title" style={{textAlign: "right"}}>Training Guide</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <div className="centered-text">
                    Access step-by-step guides for teaching commands and track your dog’s progress with an interactive progress bar.
                    </div>                  
                    </div>
                  <div className="right-column">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                  <source src={TrainingFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>


                <h5 class="feature-title">Community Forum</h5>
                <div className="two-column-section">
                  <div className="left-column">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                  <source src={CommunityFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    Connect with other dog parents to share tips, tricks, and advice on dog care, training, and health.
                    </div>
                  </div>
                </div>


                <h5 class="feature-title" style={{textAlign: "right"}}>Mark Important Dates</h5>
                <div className="two-column-section">
                  <div className="left-column">
                    <div className="centered-text">
                    Stay organized with reminders for your dog’s birthdays, vet visits, and other important events all in one place.            
                    </div>      
                    </div>
                  <div className="right-column">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                  <source src={CalendarFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
 
                <h5 class="feature-title">Household Feature</h5>
                <div className="two-column-section">
                  <div className="left-column">
                  <video autoPlay loop muted webkit-playsinline playsInline controls={false}>
                  <source src={HouseholdFeature} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="right-column">
                    <div className="centered-text">
                    Add family members from your contact list to create a shared "household," keeping everyone in sync with your pet’s calendar, activities, and training progress.                  
                    </div>
                  </div>
                </div>


                <h5 className="left-align-details" style={{fontFamily: "Metropolis-Bold", marginTop: "150px"}}>Platform Choice</h5>
                <div>A mobile app is perfect for furfamily as it allows on-the-go access to pet care tasks, notifications, and the shared household calendar. 
                  It better allows family members to stay synced anytime, anywhere. Additionally, features like daily challenges and the community forum are more 
                  engaging on a mobile platform.
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

export default FurFamily;
