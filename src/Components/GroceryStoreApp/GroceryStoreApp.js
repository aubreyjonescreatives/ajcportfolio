import React from 'react';
//import {MDBContainer, MDBIframe} from "mdbreact";
import { Row, Col, Nav} from 'react-bootstrap';
import NavBar2 from '../NavBar/NavBar2'
import logo from '../../images/grocerystoreapp/patternlibrary/Group 14.png'
import smallLoading from '../../images/grocerystoreapp/lowfidelitywireframes/Loading Screen.jpg'
import mediumLoading from '../../images/grocerystoreapp/lowfidelitywireframes/Loading Screen iPad.jpg'
import largeLoading from '../../images/grocerystoreapp/lowfidelitywireframes/Loading Screen MacBook Pro.jpg'
import smallLogin from '../../images/grocerystoreapp/lowfidelitywireframes/Login Screen.jpg'
import mediumLogin from '../../images/grocerystoreapp/lowfidelitywireframes/Login Screen iPad.jpg'
import largeLogin from '../../images/grocerystoreapp/lowfidelitywireframes/Login Screen MacBook Pro.jpg'
import smallsignup from '../../images/grocerystoreapp/lowfidelitywireframes/Sign Up and Subscribe.jpg'
import mediumsignup from '../../images/grocerystoreapp/lowfidelitywireframes/Sign Up and Subscribe Screen iPad.jpg'
import largesignup from '../../images/grocerystoreapp/lowfidelitywireframes/Sign Up and Subscribe Screen MacBook Pro.jpg'
import smallgsshop from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Shop Screen iPhone.jpg'
import mediumgsshop from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Shop Screen iPad.jpg'
import largegsshop from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Shop Screen MacBook Pro-1.jpg'
import smallgscart from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Cart Screen iPhone-1.jpg'
import mediumgscart from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Shop Screen iPad-2.jpg'
import largegscart from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Shop Screen MacBook Pro-2.jpg'
import smallgscart2 from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Cart Screen iPhone.jpg'
import mediumgscart2 from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Shop Screen iPad-1.jpg'
import largegscart2 from '../../images/grocerystoreapp/lowfidelitywireframes/Grocery Store Shop Screen MacBook Pro-1.jpg'

import patternlibrary from '../../images/grocerystoreapp/patternlibrary/patternlibrary.png'
import patternlibrary2 from '../../images/grocerystoreapp/patternlibrary/patternlibrary2.png'
import patternlibrary3 from '../../images/grocerystoreapp/patternlibrary/patternlibrary3.png'


import smallLoadingHF from '../../images/grocerystoreapp/hifidelitywireframes/loadingscreeniphone.png'
import mediumLoadingHF from '../../images/grocerystoreapp/hifidelitywireframes/loadingscreenipad.png'
import largeLoadingHF from '../../images/grocerystoreapp/hifidelitywireframes/loadingscreenmackbook.png'
import smallLoginHF from '../../images/grocerystoreapp/hifidelitywireframes/loginscreeniphone.png'
import mediumLoginHF from '../../images/grocerystoreapp/hifidelitywireframes/loginscreenipad.png'
import largeLoginHF from '../../images/grocerystoreapp/hifidelitywireframes/loginscreenmacbookpro.png'

import smallsignupHF from '../../images/grocerystoreapp/hifidelitywireframes/signupscreeniphone.png'
import mediumsignupHF from '../../images/grocerystoreapp/hifidelitywireframes/signupscreenipad.png'
import largesignupHF from '../../images/grocerystoreapp/hifidelitywireframes/signupscreenmacbook.png'

import smallshopHF from '../../images/grocerystoreapp/hifidelitywireframes/shopscreeniphone.png'
import mediumshopHF from '../../images/grocerystoreapp/hifidelitywireframes/shopscreenipad.png'
import largeshopHF from '../../images/grocerystoreapp/hifidelitywireframes/shopscreenmacbook.png'

import smallcartHF from '../../images/grocerystoreapp/hifidelitywireframes/cartscreeniphone.png'
import mediumcartHF from '../../images/grocerystoreapp/hifidelitywireframes/cartscreenipad.png'
import largecartHF from '../../images/grocerystoreapp/hifidelitywireframes/cartscreenmacbook.png'

import smallcart2HF from '../../images/grocerystoreapp/hifidelitywireframes/cartiphone2.png'
import mediumcart2HF from '../../images/grocerystoreapp/hifidelitywireframes/shopscreenipad2.png'
import largecart2HF from '../../images/grocerystoreapp/hifidelitywireframes/cartscreenmacbook2.png'



import referfriend from '../../images/grocerystoreapp/researchresults/refertofriendapp.PNG'
import protoPersona from '../../images/grocerystoreapp/protopersonas/protopersona2.png'
import CAC from '../../images/grocerystoreapp/competitoranalysischart/competitoranalysischart.png'

import journeyMap from '../../images/grocerystoreapp/journeymap/gsjourneymap.png'
import journeyMap2 from '../../images/grocerystoreapp/journeymap/gsjourneymap2.png'



function GroceryStoreApp() {
  return (
  <>
  <NavBar2 />
    <div className="gsNav">
    <Col><div><a href="#overview">Overview</a></div></Col>
    <Col><div><a href="#problemstatement">Problem Statement</a></div></Col>
    <Col><div><a href="#audience">Audience</a></div></Col>
    <Col><div><a href="#research">Research</a></div></Col>
    <Col><div><a href="#cac">Competitive Analysis Chart</a></div></Col>
    <Col><div><a href="#customerjourneymap">Customer Journey Map</a></div></Col>
    <Col><div><a href="#sketches">Sketches</a></div></Col>
    <Col><div><a href="#lowfidelitywireframes">Low Fidelity Wireframes</a></div></Col>
    <Col><div><a href="#patternlibrary">Pattern Library</a></div></Col>
    <Col><div><a href="#hifidelitywireframes">Hi Fidelity Wireframes</a></div></Col>
    <Col><div><a href="#prototype">Prototype</a></div></Col>
    <Col><div><a href="#usabilitytesting">Usability Testing</a></div></Col>
    <Col><div><a href="#utfeedback">Usability Testing Feedback</a></div></Col>
    <Col><div><a href="#nextsteps">Next Steps</a></div></Col>
    </div>
  <div className="caseStudy">
  <Row className="gsHeroImage" >
  <Col sm={12} md={6} lg={6}>
  <h1 className="gsheroHeader">A Grocery Store UX/UI Design Case Study</h1>
  </Col>
  <Col sm={12} md={6} lg={6}> <figure className="gs-logoImage"><img src={logo} alt="logo"/></figure></Col>
  </Row>
  <Row className="section-row-a">
  <h1 className="header-ux-case-section" id="overview">Overview</h1>
  <Col>
    <p className="overviewInfo-0">The year 2020 created a lot of disorganized chaos world wide when the pandemic hit in March due to the COVID-19 sickness scare. 
    Public places shut down and people could no longer enjoy certain freedoms all around the world. The pandemic greatly affected the retail and food industries. 
    Grocery staples became scarce as people scavenged for toilet paper, rice, noodles, and meats. Shelves emptied within hours of the global 
    shutdown. 
    </p>
    {/* <p className="overviewInfo">
      I was living in a small apartment and did not have much room for food storage at the time. We were lucky enough to adapt readily to our 
      new living situation alongside our food restrictions. The government advised social distancing as much as possible. I lived with a diabetic and so we had to be 
      extra careful as we did not want to catch COVID-19 as those with underlying causes experienced worse side effects. Not to mention we were both 
      gluten free and lactose free at the time and so most of our grocery list products were everyday pantry staples: rice, gluten free noodles, vegetables, and meat. 
      Of course, they became the items that everyone else chose to buy as they can store longer than other products.  
    </p> */}
    <p className="overviewInfo">Stores around the world adapted to these sudden needs. Walmart introduced its instant express online delivery system in April 2020 and was very 
    prepared for 2020's changes. Instacart provided many possibilities for online grocery shopping as well.</p>
    <p className="overviewInfo">While people can now take the COVID-19 vaccine and be less afraid to shop in person, I begged the question. How many people 
    changed like me to only grocery shop online? Does it make that much of a difference? Is it cost effective? With those questions, I created a UX/UI
     case study for a competitive app and called it the InstaFresh Farmer's Market. </p>
     </Col>
    
  </Row>
  <Row className="section-row-b">
  <h1 className="header-ux-case-section" id="problemstatement">Problem Statement</h1>
  <p className="overviewInfo">Grocery shoppers worldwide need a safe environment where they can pick and compare fresh foods from multiple stores online so that they can social distance, save time and money, and  eat right.</p>
  </Row>

  <Row className="section-row-c">
  <h1 className="header-ux-case-section" id="audience">Audience</h1>
  <Col sm={12} md={12} lg={5}>
  <p className="overviewInfo">I had a general idea of my audience as I began my research. 
  Meet Jake Waters, a proto persona as he tries to provide healthy food for his busy family.</p>
  </Col>
  <Col sm={12} md={12} lg={6}><figure className="researchStats"><img src={protoPersona} alt="proto persona"/></figure></Col>
  </Row>




  <Row className="section-row-a">
  <h1 className="header-ux-case-section" id="research">Research</h1>
  <Col sm={12} md={12} lg={5}>
  <p className="overviewInfo">Alongside my proto personas, I conducted interviews in person and online to find out if the pandemic overall persuaded 
  consumers to grocery shop online. I received a high satifaction report regarding grocery shop website/app recommendations from a random pool of consumers. 
  66.7% of them said they would recommend their preferred grocery shop website/app while just 33.3% of them said they would not suggest it to others.</p>
  </Col>
  <Col sm={12} md={12} lg={6}><figure className="researchStats"><img src={referfriend} alt="research"/></figure></Col>
  </Row>

  <Row className="section-row-d">
  <h1 className="header-ux-case-section">Consumer Feedback</h1>
  <Col sm={12} md={12} lg={12}>
  <p className="overviewInfo">I also asked why these consumers prefer to shop in person or online. Here are some direct quotes from those with the preference to shop in person:</p>
  <p className="researchQuote">"In person, I can see and choose my produce, making sure it meets my desired look or ripeness."</p>
  <p className="researchQuote">"In person. I grew up that way and like it that way. Plus I get to pick my own produce."</p>
  <p className="researchQuote">"In person because I can decide what my substitutions will be if the product I want isn't available."</p>
  <p className="overviewInfo">And one comment from someone that prefers to shop online:</p>
  <p className="researchQuote">"Online [is] easier and safer for my health conditions."</p>
  <p className="overviewInfo">As more consumers still preferred to shop in person, I wondered what we could change about the online grocery shopping experience. Most responders did not need any changes. But here is one 
  quote from someone that preferred to shop online:  
  <p className="researchQuote">"I would like to "aisle shop" a bit more. Like shopping the vegan aisle. Sometimes healthy lifestyle/food products 
  are hard to find in the navigation."</p></p>
 
 
  </Col>
  </Row>


  <Row className="section-row-b">
  <h1 className="header-ux-case-section">Research Conclusion</h1>
  <Col>
    <p className="overviewInfo-0">
    This interview data allowed me to add more realistic characteristics to my proto personas and follow their stories as they compare different user experiences through 
     a competitive analysis chart. They helped me determine which features were important for online grocery shoppers verses which features failed in this market. 
    </p>
  
     </Col>
    
  </Row>




  <Row className="section-row-c">
  <h1 className="header-ux-case-section" id="cac">Competitive Analysis Chart</h1>

  <Col sm={12} md={12} lg={4}>
  <p className="overviewInfo">Instacart allows buyers to chat with their shoppers throughout the shopping experience. The shoppers can snap photos of current 
  fresh food status and offer alternative options. Not many buyers I talked to knew of these Instacart features. Of course, Walmart, Target, and Smiths do not 
  offer these features throughout the shopping process in their independent web apps. If apps were more consistent with user needs, would they gain more online shoppers?</p>
  </Col>
  <Col sm={12} md={12} lg={7}><figure className="researchStats"><img src={CAC} alt="Competitive Analysis Chart"/></figure></Col>
 </Row>

  <Row className="section-row-a">
  <h1 className="header-ux-case-section" id="customerjourneymap">Customer Journey Map</h1>
  <Col sm={12} md={12} lg={12}>
  <p className="overviewInfo">With this data, I could follow the flow of what happens to a customer as they shop online for fresh foods.</p>
  </Col>
  </Row>
  <Row className="section-row-a">
  <Col sm={12} md={6} lg={6}><figure className="researchStats"><img src={journeyMap} alt="Journey Map"/></figure></Col>
  <Col sm={12} md={6} lg={6}><figure className="researchStats"><img src={journeyMap2} alt="Journey Map 2nd Page"/></figure></Col>
  </Row>





  <Row className="section-row-b">
  <h1 className="header-ux-case-section" id="sketches">Sketches</h1>
  <p className="overviewInfo">Instacart allows buyers to chat with their shoppers throughout the shopping experience. The shoppers can snap photos of current 
  fresh food status and offer alternative options. Not many buyers I talked to knew of these Instacart features. Of course, Walmart, Target, and Smiths do not 
  offer these features throughout the shopping process in their independent web apps. If apps were more consistent with user needs, would they gain more online shoppers?</p>
  </Row>

  
  <Row className="section-row-c">
 
  <h1 className="header-ux-case-section" id="lowfidelitywireframes">Low Fidelity Wireframes</h1>
  <h1 className="header-0">1. Loading Screen</h1>
  <Row className="screens">
  <Col sm={12} md={2} lg={2}>
  <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallLoading} alt="lo-fi-wireframe"/></figure>
  </Col >
  <Col sm={12} md={5} lg={4}>
  <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumLoading} alt="lo-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largeLoading} alt="lo-fi-wireframe"/></figure>
  </Col>
  </Row>
  <h1 className="header-0">2. Login Screen</h1>
  
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallLogin} alt="lo-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumLogin} alt="lo-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largeLogin} alt="lo-fi-wireframe"/></figure>
  </Col>
  </Row>


  <h1 className="header-0">3. Sign Up and Subscribe Screen</h1>
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallsignup} alt="lo-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumsignup} alt="lo-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largesignup} alt="lo-fi-wireframe"/></figure>
  </Col>
  </Row>



  
  <h1 className="header-0">4. Grocery Store Shop Screen</h1>
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallgsshop} alt="lo-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumgsshop} alt="lo-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largegsshop} alt="lo-fi-wireframe"/></figure>
  </Col>
  </Row>




  
  <h1 className="header-0">5. Grocery Store Cart Screen</h1>
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallgscart} alt="lo-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumgscart} alt="lo-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largegscart} alt="lo-fi-wireframe"/></figure>
  </Col>
  </Row>



  
  
  <h1 className="header-0">6. Grocery Store Cart Screen 2</h1>
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallgscart2} alt="lo-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumgscart2} alt="lo-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largegscart2} alt="lo-fi-wireframe"/></figure>
  </Col>
  </Row>


  </Row>


  <Row className="section-row-a">
    
  <h1 className="header-ux-case-section" id="patternlibrary">Pattern Library</h1>
<Col  sm={12} md={12} lg={12}>
<p className="overviewInfo">With the low fidelity wireframes now in place, it was time to create my pattern library. I wanted colors that psychologically resembled fresh food, which is 
  why I chose the color green as my primary color. I wanted easy to read font, which is why I went with the Roboto font family. The logo consists of the I and F 
  in InstaFresh with the I acting as brocoli to hint at fresh foods. 
</p>
</Col>
<Row className="a-image">
  <Col sm={12} md={6} lg={4}> <figure className="GSImage"><img src={patternlibrary} alt="Pattern Library"/></figure></Col>
  <Col sm={12} md={6} lg={4}> <figure className="GSImage"><img src={patternlibrary2} alt="Pattern Library 2"/></figure></Col>
  <Col sm={12} md={6} lg={4}> <figure className="GSImage"><img src={patternlibrary3} alt="Pattern Library 3"/></figure></Col>
</Row>

  </Row>


  <Row className="section-row-b">
 
  <h1 className="header-ux-case-section" id="hifidelitywireframes">Hi Fidelity Wireframes</h1>
  <h1 className="header-0">1. Loading Screen</h1>
  <Row className="screens">
  <Col sm={12} md={2} lg={2}>
  <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallLoadingHF} alt="hi-fi-wireframe"/></figure>
  </Col >
  <Col sm={12} md={5} lg={4}>
  <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumLoadingHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largeLoadingHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  </Row>
  <h1 className="header-0">2. Login Screen</h1>
  
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallLoginHF} alt="hi-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumLoginHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largeLoginHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  </Row>



  <h1 className="header-0">3. Sign Up and Subscribe Screen</h1>
  
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallsignupHF} alt="hi-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumsignupHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largesignupHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  </Row>



  <h1 className="header-0">4. Grocery Store Shop Screen</h1>
  
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallshopHF} alt="hi-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumshopHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largeshopHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  </Row>



  <h1 className="header-0">5. Grocery Store Cart Screen</h1>
  
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallcartHF} alt="hi-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumcartHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largecartHF} alt="hi-fi-wireframe"/></figure>
  </Col>
  </Row>


  <h1 className="header-0">6. Grocery Store Cart Screen 2</h1>
  
  <Row className="screens">
 <Col sm={12} md={2} lg={2}>
 <h1 className="gsHeader-1">Mobile</h1>
  <figure className="GSImage"><img src={smallcart2HF} alt="hi-fi-wireframe"/></figure>
  </Col>
 <Col sm={12} md={5} lg={4}>
 <h1 className="gsHeader-1">Tablet</h1>
  <figure className="GSImage"><img src={mediumcart2HF} alt="hi-fi-wireframe"/></figure>
  </Col>
  <Col sm={12} md={5} lg={5}>
  <h1 className="gsHeader-1">Desktop</h1>
  <figure className="GSImage"><img src={largecart2HF} alt="hi-fi-wireframe"/></figure>
  </Col>
  </Row>







  </Row>





  <Row className="section-row-c">
  <h1 className="header-ux-case-section" id="prototype">Prototype</h1>
  <iframe className="prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDSh5JCxNCewzws3hEW7GoC%2Fgrocerystoreapp%3Fnode-id%3D403%253A1332%26scaling%3Dscale-down%26page-id%3D403%253A1326%26starting-point-node-id%3D403%253A1328" title="A Prototype"></iframe>
  </Row>



  <Row className="section-row-a">
  <h1 className="header-ux-case-section" id="usabilitytesting">Usability Testing</h1>
  <Col sm={12} md={12} lg={12}>
  <p className="overviewInfo">If apps were more consistent with user needs, would they gain more online shoppers? I created a Maze usability test
  based upon my small screen prototype to test the flow for creating an account and adding items to a cart.</p>
  </Col>
  <Col sm={12} md={12} lg={12}>
  <iframe className="prototype" src="https://t.maze.co/50429884" title="A User Test"></iframe>
  
  </Col>
  </Row>

  <Row className="section-row-b">
  <h1 className="header-ux-case-section" id="utfeedback">Usability Testing Feedback</h1>
  <p className="overviewInfo">Instacart allows buyers to chat with their shoppers throughout the shopping experience. The shoppers can snap photos of current 
  fresh food status and offer alternative options. Not many buyers I talked to knew of these Instacart features. Of course, Walmart, Target, and Smiths do not 
  offer these features throughout the shopping process in their independent web apps. If apps were more consistent with user needs, would they gain more online shoppers?</p>
  </Row>


  <Row className="section-row-c">
  <h1 className="header-ux-case-section" id="nextsteps">Next Steps</h1>
  <p className="overviewInfo">My next steps involve updating the app design with the usability testing trends. 
  I still want to have the most viable product for development in mind throughout this process. When we sign off the design 
  process, this app is ready for the next stages in development.</p>
  </Row>







  </div>



  </>
  );
}

export default GroceryStoreApp;
