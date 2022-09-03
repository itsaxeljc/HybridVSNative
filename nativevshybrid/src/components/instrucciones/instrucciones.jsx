import React, { useState } from "react";
import styles from "./instrucciones.module.scss";
import baseStyle from "../pages/pages.module.scss";
import { Pregunta } from "../pregunta/pregunta";

export function Instrucciones(props) {
  const [show, setShow] = useState(true);
  const [showQ, setShowQ] = useState(false);

  return (
    <div className={baseStyle.mainContainer}>
      {show ? (
        <div className={baseStyle.wrapper}>
          <span className={baseStyle.title}>
            Antes de <br />
            iniciar
          </span>
          <span className={styles.ins}>
            <p>
              Selecciona la opción que cumpla a mayor medida con la
              característica de arriba, tienes 5 segundos para responder cada
              pregunta, el puntaje máximo por pregunta es de 5pts. Cada segundo
              que pase te resta 1 punto.
            </p>
          </span>
          <div
            className={baseStyle.button}
            onClick={() => {
              setShow(!show);
              setShowQ(!showQ);
            }}
          >
            Jugar
          </div>
        </div>
      ) : null}
      {showQ ? (
        <Pregunta
          preguntas={[
            "Mayor seguridad",
            "Mayor rapidez",
            "Mejor integración",
            "Una sola base de código",
            "Mejor experiencia de usuario",
            "Menor costo",
            "Tiempo de desarrollo más corto",
            "Alto nivel de personalización",
            "Mantenimiento complejo",
            "Escalabilidad",
          ]}
          respuestasNativa={[
            1,
            1,
            1,
            0,
            1,
            0,
            0,
            1,
            0,
            1
          ]}
          respuestasHibrida={[
            0,
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            0
          ]}
          temps={5}
        ></Pregunta>
      ) : null}
    </div>
  );
}
