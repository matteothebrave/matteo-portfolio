import React from "react";
import Card from "react-bootstrap/Card";
import { Check } from 'phosphor-react'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matteo </span>
            from <span className="purple"> Curitiba, Brazil.</span>
            <br /> I am a Junior Developer under Development
            <br />
            <br />
             Those are some things i love most
          </p>
       
          <ul>
            <li className="about-activity">
              <Check /> Talking about God
            </li>
            <li className="about-activity">
              <Check /> Training Dogs
            </li>
            <li className="about-activity">
              <Check /> Playing all kind of sports
              
            </li>
            
          </ul>
          
          <p style={{ color: "white" }}> <br></br>
            "Under development, brick by brick, aiming the endless ladder of knowledge"{" "}
          </p>
          <footer className="blockquote-footer">M.G</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
