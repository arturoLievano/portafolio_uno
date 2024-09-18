import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¿QUIÉN <span className="purple"> SOY </span>?
            </h1>
            <p className="home-about-body">
           
            Me considero un desarrollador entusiasta, 
            con un fuerte deseo de crear productos innovadores y de calidad, basados en buenas prácticas de desarrollo. 
            Estoy interesado en contribuir a una comunidad de progreso y colaboración entre compañeros de trabajo. 
            
              <br />
              <br />
              Utilizo lenguajes cómo:
              <i>
                <b className="purple"> Java, Javascript y Python.</b>
              </i>
              <br />
              <br />
              Mis áreas de interés incluyen el desarrollo de &nbsp;
              <i>
                <b className="purple">Tecnologías Web, Servicios y Productos </b> así como
                también áreas relacionadas con{" "}
                <b className="purple">
                  Web3.
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, busco desarrollar con <b className="purple">tecnologias diversas</b> para obtener una vista amplia sobre como construir 
              <i>
                <b className="purple">
                  {" "}
                  aplicaciones bajo distintos principios
                </b>
              </i>
              &nbsp; como por ejemplo;
              <i>
                <b className="purple"> REST, RPC, SOLID, MVC. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN:</h1>
            <p>
              No dudes en <span className="purple">conectarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/arturoLievano"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/luis-arturo-melgar-li%C3%A9vano-b96098289/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Home2;
