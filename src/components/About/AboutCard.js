import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matteo </span>
            from <span className="purple"> Curitiba, Brazil.</span>
            <br />I am a Junior Developer under Development
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Talking about God
            </li>
            <li className="about-activity">
              <ImPointRight /> Training Dogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Under development, brick by brick, aiming the endless ladder of knowledge"{" "}
          </p>
          <footer className="blockquote-footer">Matteo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
