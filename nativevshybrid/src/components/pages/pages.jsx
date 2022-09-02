import React, { useState } from "react";
import styles from "./pages.module.scss";
import { Instrucciones } from "../instrucciones/instrucciones";

export function Pages(props) {
  const [show, setShow] = useState(true);
  const [showIns, setShowIns] = useState(false);

  return (
    <div className={styles.mainContainer}>
      {show ? (
        <div className={styles.wrapper}>
          <span className={styles.title}>Hybrid vs Native</span>
          <div className={styles.input}>
            <input type="text" placeholder="Ingrese tu nombre de jugador" />
          </div>
          <div
            className={styles.button}
            onClick={() => {
              setShow(!show);
              setShowIns(!showIns);
            }}
          >
            Iniciar juego
          </div>
          <div className={styles.scoreboard}>
            <span className={styles.subtitle}>Top 3</span>
            <table>
              <thead>
                <tr>
                  <td className={styles.player}>Pedro Avila</td>
                  <td className={styles.score}>10pts</td>
                </tr>
                <tr>
                  <td className={styles.player}>Bradley Flores</td>
                  <td className={styles.score}>9pts</td>
                </tr>
                <tr>
                  <td className={styles.player}>Axel Jacobo</td>
                  <td className={styles.score}>9pts</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      ) : null}
      {showIns ? <Instrucciones /> : null}
    </div>
  );
}
