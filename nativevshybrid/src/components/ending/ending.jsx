import React, { useState } from "react";
import styles from "./ending.module.scss";
import baseStyle from "../pages/pages.module.scss";
import { Pages } from "../pages/pages";

export function Ending(props) {
  const questions = [
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
  ];

  const respuestas = [
    "Nativa",
    "Nativa",
    "Nativa",
    "Híbrida",
    "Nativa",
    "Híbrida",
    "Híbrida",
    "Nativa",
    "Nativa",
    "Nativa",
  ];

  const points = props.points;
  const answers = props.answers;
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(true);
  const [showI, setShowI] = useState(false);

  function changeQuestion(i) {
    if (i == 9) {
      setQuestion(0);
    } else {
      setQuestion(i + 1);
    }
  }

  return (
    <div className={baseStyle.mainContainer}>
      {show ? (
        <div className={baseStyle.wrapper}>
          <span className={styles.title}>
            ¡Has obtenido
            <br />
            {points} puntos!
          </span>
          <div className={styles.ins}>
            {questions.map((item, i) => {
              return (
                <div
                  className={
                    question === i
                      ? styles.questionActive
                      : styles.questionHidden
                  }
                  key={i}
                >
                  <p>Aquí tienes un resumen de tus respuestas:</p>
                  <p>
                    Pregunta {i + 1}
                    <br />
                    {item}
                    <br />
                    Respondiste: {answers[i]}
                  </p>

                  <div
                    className={
                      answers[i] === respuestas[i]
                        ? styles.active
                        : styles.questionHidden
                    }
                  >
                    <span className={styles.prettyFont}>
                      ¡Tu respuesta es correcta!
                    </span>
                  </div>

                  <div
                    className={
                      answers[i] !== respuestas[i]
                        ? styles.active
                        : styles.questionHidden
                    }
                  >
                    <span className={styles.prettyFont}>
                      ¡Tu respuesta es incorrecta!
                    </span>
                  </div>
                  <div
                    onClick={() => changeQuestion(i)}
                    className={styles.siguiente}
                  >
                    Siguiente {">"}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={styles.button}
            onClick={() => {
              setShow(!show);
              setShowI(!showI);
            }}
          >
            Volver a jugar
          </div>
        </div>
      ) : null}
      {showI ? <Pages /> : null}
    </div>
  );
}
