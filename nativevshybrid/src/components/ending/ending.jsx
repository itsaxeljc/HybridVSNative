import React,{ useState } from 'react';
import styles from "./ending.module.scss";
import baseStyle from "../pages/pages.module.scss";
import {Pages} from "../pages/pages";


export function Ending(props) {
    const points = props.points;
    const answers = props.answers;
    const [show, setShow] = useState(true);
    const [showI, setShowI] = useState(false);

    return (
    <div className={baseStyle.mainContainer}>
      {show ? (
        <div className={baseStyle.wrapper}>
          <span className={baseStyle.title}>
            ¡Has obtenido<br/>{points} puntos!
          </span>
          <span className={styles.ins}>
            <p>
              Aquí tienes un resumen de tus respuestas
              {console.log(answers)}
            </p>
          </span>
          <div
            className={baseStyle.button}
            onClick={() => {
              setShow(!show);
              setShowI(!showI);
            }}
          >
            Volver a jugar
          </div>
        </div>
      ) : null}
      {showI ? <Pages/>:null}
      </div>
    );

};