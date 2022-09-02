import React,{ useState } from 'react';
import styles from "./pregunta.module.scss";
import baseStyle from '../pages/pages.module.scss';


export function Pregunta(props) {
    const pregunta = props.pregunta;
    const temps = props.temps;
    const [show,setShow] = useState(1);

    return (
        <div className={baseStyle.mainContainer}>
        <div className={baseStyle.wrapper}>
        <span className={baseStyle.title}>Antes de <br/>iniciar</span>
        <div className={baseStyle.button}>Nativa</div>
        <div className={baseStyle.button}>Híbrida</div>
      </div>
    </div> 
    );

};