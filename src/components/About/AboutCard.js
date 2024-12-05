import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Muhammad Fachruddin </span>
            from <span className="purple"> Semarang, Indonesia.</span>
            <br />
            I am a passionate web developer with a strong background in both
            front-end and back-end development. I specialize in creating
            seamless, user-friendly websites that work beautifully across
            devices.
            <br />
            My expertise lies in building responsive websites that not only look
            great but also deliver a powerful user experience.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching people date
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fachruddin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
