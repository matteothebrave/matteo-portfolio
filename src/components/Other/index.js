import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutMe from "../../Assets/aboutMe.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";



function Other() {
 
  return (
    
      
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
           <h1>Eu a patroa e as crianças</h1>
          <div>
          <iframe src='https://widgets.sociablekit.com/twitch-live-videos/iframe/25392232' frameborder='0' width='100%' height='1000'></iframe>
          </div>
          {/* <h1>Todo mundo odeia o Chris</h1>
          <iframe src='https://widgets.sociablekit.com/twitch-live-videos/iframe/25392238' frameborder='0' width='100%' height='1000'></iframe> */}
          </Col>
          {/* <Col md={4} className="myAvatar">
            <Tilt>
              <img src={aboutMe} className="img-fluid" alt="avatar"
              style={{ height: "200px" }} />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Other;