import React from "react";
import { Container, Row, Col } from "react-bootstrap";



function Other() {
 
  return (
    
      
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
           <h1>Eu a patroa e as crianças - 24 horas</h1>
          <div>
          {/* <iframe autoplay="false" muted="false" src='https://widgets.sociablekit.com/twitch-live-videos/iframe/25392232' frameborder='0' width='100%' height='1000' allowFullScreen ></iframe> */}
          <iframe src="https://player.twitch.tv/?channel=euapatroaeascrias&parent=matteo-portfolio-matteothebrave.bohr.io/other" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
          <h1>Todo mundo odeia o Chris - 24 horas </h1>
          <iframe autoplay="false" muted="true" src='https://widgets.sociablekit.com/twitch-live-videos/iframe/25392238' frameborder='0' width='100%' height='1000' allowFullScreen ></iframe>
          </Col>
        
        </Row>
        <Row>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Other;