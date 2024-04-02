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
           <h1>FILMES SERAO AQUI</h1>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={aboutMe} className="img-fluid" alt="avatar"
              style={{ height: "200px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
       
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Other;