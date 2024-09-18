import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ing. en Ciencias de la Computación",
          "Creador de Experiencias Digitales",
          "Desarrollador Full Stack",
          "Optimización y Escalabilidad",
          "Fanático de la Automatización",
          "Desarrollador Ágil",
          "Entusiasta de Código Abierto",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
