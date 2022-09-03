import React, { useState, useEffect } from "react";
import styles from "./pregunta.module.scss";
import baseStyle from "../pages/pages.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Ending } from "../ending/ending";

export function Pregunta(props) {
  const preguntas = props.preguntas;
  const respuestasNativa = props.respuestasNativa;
  const respuestasHibrida = props.respuestasHibrida;
  const temps = props.temps;
  const [show, setShow] = useState(true);
  const style = props.style;
  const [question, setQuestion] = useState(preguntas[0]);
  const [count, setCount] = useState(1);
  const [showFinal, setShowFinal] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const [points, setPoints] = useState(0);
  var timer;

  const [answers, setAnswers] = useState([]);

  //Timer controls
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setCount(count + 1);
        setQuestion(preguntas[count]);
        setSeconds(temps);
      }
      if (count === preguntas.length + 1) {
        setShow(!show);
        restart();
        stop();
        setCount(1);
        setShowFinal(!showFinal);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const restart = () => {
    setSeconds(temps);
  };

  const stop = () => {
    clearInterval(timer);
  };

  return (
    <div className={baseStyle.mainContainer}>
      {show ? (
        <div className={baseStyle.wrapper}>
          <div className={baseStyle.points}>
            <span className={baseStyle.subtitle}>{points}</span>
          </div>
          <div className={baseStyle.timer}>
            <div className={styles.timerIcon}>
              <CircularProgressbar
                value={seconds}
                maxValue={temps}
                styles={{
                  path: {
                    stroke: "#358BB1",
                  },
                  text: {
                    fill: "#ffffff",
                    fontSize: "16px",
                  },
                }}
              />
            </div>
          </div>
          <span className={baseStyle.title} style={style}>
            {question}
          </span>
          <div className={styles.options}>
            <div
              className={baseStyle.button}
              onClick={() => {
                setPoints(points + seconds * respuestasNativa[count - 1]);
                console.log(answers);
                setAnswers((answers) => answers.concat("Nativa"));
                restart();
                setCount(count + 1);
                if (count === preguntas.length) {
                  setShow(!show);
                  restart();
                  stop();
                  setCount(1);
                  setShowFinal(!showFinal);
                }
                setQuestion(preguntas[count]);
              }}
            >
              Nativa
            </div>
            <div
              className={baseStyle.button}
              onClick={() => {
                setPoints(points + seconds * respuestasHibrida[count - 1]);
                console.log(answers);
                setAnswers((answers) => answers.concat("Híbrida"));
                restart();
                setCount(count + 1);
                if (count === preguntas.length) {
                  setShow(!show);
                  restart();
                  stop();
                  setCount(1);
                  setShowFinal(!showFinal);
                }
                setQuestion(preguntas[count]);
              }}
            >
              Híbrida
            </div>
          </div>
        </div>
      ) : null}
      {showFinal ? <Ending points={points} answers={answers} /> : null}
    </div>
  );
}
