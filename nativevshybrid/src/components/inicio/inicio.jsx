import React, { useState } from "react";
import styles from "./inicio.module.scss";
import Spline from "@splinetool/react-spline";

export function Inicio(props) {
  return (
    <div className={styles.mainContainer}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/jyYz8JohihQqSFXV/scene.splinecode"
      />
      <div className={styles.wrapper}>
        <span className={styles.title}>Hybrid vs Native</span>
        <div className={styles.input}>
          <input type="text" placeholder="Ingrese tu nombre de jugador" />
        </div>
        <div className={styles.button}>Iniciar juego</div>
        <div className={styles.scoreboard}>
          <span className={styles.subtitle}>Top 3</span>
          <div className={styles.players}>
            <table>
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
