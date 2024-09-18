import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bienvenido, me llamo <span className="purple">Luis Arturo Melgar Liévano, </span>
            actualmente resido en <span className="purple"> Puebla, México.</span>
            <br />
            <br />
            Soy graduado en Ingeniería en Ciencias de la Computación.
            He adquirido amplia experiencia en el uso, análisis, diseño y desarrollo de aplicaciones.
            <br />
            Mi pasión por los sistemas computacionales comenzó con mi interés en la electrónica.
            <br />
            <br />
            Además, disfruto de otras actividades como:  
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ciclismo
            </li>
            <li className="about-activity">
              <ImPointRight /> Acampar
            </li>
            <li className="about-activity">
              <ImPointRight /> Mecánica
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Buscando crear cosas que hagan la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Luis Arturo Melgar Liévano</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
