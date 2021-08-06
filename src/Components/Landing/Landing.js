import React from 'react';
import { Row, Col, Nav} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar'
import {NavLink} from 'react-router-dom'
import NutritionPersona from '../../images/protopersona2.png'
import GSApp from '../../images/loginscreenmacbookpro.png'
import ShowJourneyMap from '../../images/finaldraft.png'
import HeroImage from '../../images/heroimage.png'
import TeslaSolar from '../../images/teslasolargroupproject.png'
import Algebra from '../../images/algebra1quizzes.PNG'
import Games from '../../images/gamequestgames.png'
import { FaBehanceSquare, FaLinkedin, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";



function Landing() {


  return (
  <div>
    <NavBar />
    <figure className="heroImage"><img src={HeroImage} alt="Portfolio"/></figure>
   
    <Row id="skills" className="skills">SKILLS</Row>
    <Row xs={6} md={6} lg={3} id="skills" className="skillsSection">
      <Col xs={12} md={6} lg={3} className="skillsInfo">
      <div>UX Design</div>
      <p>Research, Interviews, Surveys</p>
      <p>Competitive Comparison Analysis</p>
      <p>Customer Satisfaction</p>
      <p>Product Controls Touch Gestures Audit</p>
      <p>Affinity Maps, Mind Maps</p>
      <p>Proto Personas, User Personas</p>
      <p>Empathy Maps, Journey Maps</p>
      <p>Card Sorting</p>
      <p>Sketches, Wireframes</p>
      <p>Prototyping</p>
      <p>User Testing</p>
  
      </Col>
      <Col xs={12} md={6} lg={3} className="skillsInfo">
      <div>UI Design</div>
      <p>Style Guide</p>
      <p>Design Principles</p>
      <p>Mood Boards</p>
      <p>Layout</p>
      <p>Color</p>
      <p>Typography</p>
      <p>Photography</p>
      <p>White Space</p>

      </Col>
      <Col xs={12} md={6} lg={3} className="skillsInfo">
      <div>Front-End Web Development</div>
      <p>HTML5</p>
      <p>CSS3</p>
      <p>Advanced CSS</p>
      <p>SCSS</p>
      <p>JavaScript</p>
      <p>JSON</p>
      <p>React</p>
      </Col>
      <Col xs={12} md={6} lg={3} className="skillsInfo">
      <div>Back-End Web Development</div>
      <p>API Connection</p>
      <p>MongoDB</p>
      <p>GraphQL</p>
      <p>Express</p>
      <p>Node.JS</p>
      </Col>
    
     
    </Row>
    <Row className="sectionHeader" id="casestudies">UX/UI Case Studies</Row>
    <Row xs={12} md={6} lg={3} id="casestudiesux">
    <Col xs={12} md={6} lg={3}  className="cardInfo">
      <figure className="projectImage"><img src={NutritionPersona} alt="Nutrition Persona" /></figure>
      <div className="projectTitle">Grocery Store App</div>
        <p></p>
      </Col>
      <Col xs={12} md={6} lg={3}  className="cardInfo">
      <figure className="projectImage"><img src={TeslaSolar} alt="Tesla Solar Wireframes"/></figure>
      <div className="projectTitle">TESLA SOLAR</div>
        <p></p>
      </Col>
      <Col xs={12} md={6} lg={3}  className="cardInfo"><NavLink activeClassName="activeLink" to="/DVN" className="navLink">
      <figure className="projectImage"><img src={ShowJourneyMap} alt="Disney Vs Netflix Journey Map"/></figure>
      <div className="projectTitle">DISNEY VS NETFLIX</div></NavLink>
        <p></p>
      </Col>
        
    </Row>
    <Row className="sectionHeader">Full Stack MERN Web Development Case Studies</Row>
    <Row id="casestudieswd" className="webcasestudies">
      <Col xs={12} md={6} lg={4} className="cardInfo">
        <figure className="projectImage"><img src={GSApp} alt="Homeschool Kid" /></figure>
        <div className="projectTitle">Grocery Store App</div>
      </Col>
      <Col xs={12} md={6} lg={4} className="cardInfo">
      <figure className="projectImage"><img src={Games} alt="Games Website" /></figure>
        <div className="projectTitle">Board Games App</div>
      </Col>
      <Col xs={12} md={6} lg={4} className="cardInfo">
      <figure className="projectImage"><img src={Algebra} alt="Algebra Website" /></figure>
        <div className="projectTitle">Homeschool Web App</div>
      </Col>
    </Row>
    <Row id="articles" className="articlesSection">
      <Col  xs={12} md={6} className="articleInfo">Check Out My UX/UI and Web Development Blog</Col>
      <Col  xs={12} md={6}  className="articleInfo">
        <Nav.Link href="https://medium.com/@aubreyjonescreatives" target="_blank"><div className="articleButton">Medium Articles</div></Nav.Link> 
        
      </Col>
    </Row>
    <Row className="contactTitle">Contact</Row>
    <Row id="contact" className="contactSection">
      <Col>
     <Nav.Link href="https://www.behance.net/aubreyjones" target="_blank"><FaBehanceSquare className="contactIcon"/></Nav.Link> 
      <p>Behance</p>
      </Col>
<Col>
     <Nav.Link href="https://www.linkedin.com/in/aubrey-jones/"  target="_blank"><FaLinkedin  className="contactIcon" /> </Nav.Link>
     <p>LinkedIn</p>
     </Col>
<Col>
    <Nav.Link href="https://github.com/aubreyjonescreatives" target="_blank"><FaGithubSquare className="contactIcon" /></Nav.Link> 
     <p>Github</p>
    </Col>  
    <Col>
     <Nav.Link href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA/videos" target="_blank"><FaYoutubeSquare className="contactIcon"/></Nav.Link>
     <p>YouTube</p>
    </Col>  
    </Row>
    <Row id="resume" className="articlesSection">
      <Col  xs={12} md={6} className="articleInfo">Want More Information?<br /> Check Out My Resume<br /> For My Contact Details:</Col>
      <Col  xs={12} md={6}  className="articleInfo">
        <Nav.Link href="AJResume" to="/AJResume" target="_blank"><div className="articleButton">Aubrey Jones Resume</div></Nav.Link> 
        
      </Col>
    </Row>




    </div>
  );
}

export default Landing;
