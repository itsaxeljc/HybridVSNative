import React, { useState, useEffect } from "react";
import styles from "./pregunta.module.scss";
import baseStyle from "../pages/pages.module.scss";
import { useInterval } from "react-use";

export function Pregunta(props) {
  const preguntas = props.preguntas;
  const temps = props.temps;
  const [show, setShow] = useState(true);
  const style = props.style;
  const [question, setQuestion] = useState(preguntas[0]);
  const [count, setCount] = useState(1);
  const [play, setPlay] = useState(false);

  const [showFinal, setShowFinal] = useState(false);

  useInterval(
    () => {
      setQuestion(preguntas[count]);
      setCount(count + 1);

      if (count == preguntas.length) {
        setShow(!show);
        setShowFinal(!showFinal);
      }
    },
    play ? temps : null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuestion(preguntas[count]);
      setCount(count + 1);
      setPlay(true);
    }, temps);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={baseStyle.mainContainer}>
      {show ? (
        <div className={baseStyle.wrapper}>
          <div className={baseStyle.points}>
            <span className={baseStyle.subtitle}>4pts.</span>
          </div>
          <div className={baseStyle.timer}>
            <div className={styles.timerIcon} />
          </div>
          <span className={baseStyle.title} style={style}>
            {question}
          </span>
          <div className={styles.options}>
            <div className={baseStyle.button}>Nativa</div>
            <div className={baseStyle.button}>Híbrida</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
