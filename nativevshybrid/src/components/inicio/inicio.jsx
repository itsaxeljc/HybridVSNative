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
      </div>
    </div>
  );
}
