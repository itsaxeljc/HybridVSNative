import styles from "./inicio.module.scss";
import Spline from "@splinetool/react-spline";
import { Pages } from "../pages/pages";

export function Inicio() {
  return (
    <div className={styles.mainContainer}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/jyYz8JohihQqSFXV/scene.splinecode"
      />
      <div className={styles.wrapper}>
        <Pages></Pages>
      </div>
    </div>
  );
}
