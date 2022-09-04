import React, { useState, useEffect } from "react";
import styles from "./pages.module.scss";
import { Instrucciones } from "../instrucciones/instrucciones";
import { db } from "../../services/firebase-config";
import { collection, getDocs } from "firebase/firestore";

let namePlayer = '';
export function Pages() {
  const [show, setShow] = useState(true);
  const [showIns, setShowIns] = useState(false);
  const [player, setPlayerList] = useState([]);
  const userListRef = collection(db, "QuizGamesTop");


  useEffect(() => {
    const getPlayers = async () => {
      const data = await getDocs(userListRef);
      setPlayerList(data.docs.map((doc) => ({ ...doc.data()})));
    };
    getPlayers();
    console.log(player);
  }, []);
  
  return (
    <div className={styles.mainContainer}>
      {show ? (
        <div className={styles.wrapper}>
          <span className={styles.title}>Hybrid vs Native</span>
          <div className={styles.input}>
            <input type="text" placeholder="Ingrese tu nombre de jugador" onChange={event => namePlayer=event.target.value}/>
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
                  <td className={styles.player}>{player[0]?.nombre}</td>
                  <td className={styles.score}>{player[0]?.points}pts</td>
                </tr>
                <tr>
                  <td className={styles.player}>{player[1]?.nombre}</td>
                  <td className={styles.score}>{player[1]?.points}pts</td>
                </tr>
                <tr>
                  <td className={styles.player}>{player[2]?.nombre}</td>
                  <td className={styles.score}>{player[2]?.points}pts</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      ) : null}
      {showIns ? <Instrucciones player={player} namePlayer={namePlayer}/> : null}
    </div>
  );
}
