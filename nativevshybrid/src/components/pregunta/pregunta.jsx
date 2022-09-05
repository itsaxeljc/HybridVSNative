import React, { useState, useEffect } from "react";
import styles from "./pregunta.module.scss";
import baseStyle from "../pages/pages.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Ending } from "../ending/ending";



export function Pregunta(props) {
  const player = {...props.player}
  const namePlayer = props.namePlayer;
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
  let timer;


  const [answers, setAnswers] = useState([]);

  let gameOver = false;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setCount(count + 1);
        setQuestion(preguntas[count]);
        setSeconds(temps);
      }
      if (count === preguntas.length + 1) {
        setShow(false);
        restart();
        stop();
        setShowFinal(true);
        console.log("timer restarted");
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
                  }
                }}
              />
            </div>
          </div>
          <span className={styles.title} style={style}>
            {question}
          </span>
          <div className={styles.options}>
            <div
              className={baseStyle.button}
              onClick={() => {
                setPoints(points + seconds * respuestasNativa[count - 1]);
                setAnswers((answers) => answers.concat("Nativa"));
                restart();

                if (count === preguntas.length) {
                  console.log(answers);
                  setShow(!show);
                  restart();
                  stop();
                  setCount(1);
                  setShowFinal(!showFinal);
                }
                setCount(count + 1);
                setQuestion(preguntas[count]);
              }}
            >
              Nativa
            </div>
            <div
              className={baseStyle.button}
              onClick={() => {
                setPoints(points + seconds * respuestasHibrida[count - 1]);
                setAnswers((answers) => answers.concat("Híbrida"));
                restart();

                if(count === preguntas.length){
                  setShow(!show);
                  restart();
                  stop();
                  setCount(1);
                  setShowFinal(!showFinal);
                }
                setCount(count + 1);
                setQuestion(preguntas[count]);
              }}
            >
              Híbrida
            </div>
          </div>
        </div>
      ) : null}
      {showFinal ? <Ending points={points} answers={answers} player={player} namePlayer={namePlayer}/> : null}
    </div>
  );
}

