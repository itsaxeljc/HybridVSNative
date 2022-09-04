import React, { useState, useEffect } from "react";
import styles from "./pregunta.module.scss";
import baseStyle from "../pages/pages.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Ending } from "../ending/ending";
import { insertNewTop } from "../../services/firebaseDB";



export function Pregunta(props) {
  const player = {...props.player}
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
        

                console.log(points + seconds * respuestasNativa[count - 1]);
                console.log(answers);
                console.log( 'count === preguntas.length ' + (count === preguntas.length) );

                setCount(count + 1);
                console.log('Native');
                restart();
                if (count === preguntas.length) {
                  console.log(answers);
                  validatePositionsTop(points,player,props.namePlayer);
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
                setAnswers((answers) => answers.concat("Híbrida"));
                if(count === preguntas.length){
                  setAnswers((answers) => answers.concat("Híbrida"));
                }

                console.log(points + seconds * respuestasNativa[count - 1]);
                console.log(answers);
                console.log( 'count === preguntas.length ' + (count === preguntas.length) );

                setCount(count + 1);
                
                restart();
                if (count === preguntas.length) {
                  validatePositionsTop(points,player,props.namePlayer);
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

const validatePositionsTop = (points,player,namePlayer) => {
  
  console.log(player);
  for (let  index= 0; index < 3; index++) {
    if (points >= player[index].points)
    {
     
        player[index].nombre=namePlayer;
        player[index].points=points;
        insertNewTop(player[index]);
        return;
      
    }
  }
}

