import React,{ useState } from 'react';
import styles from "./inicio.module.scss";
import Spline from '@splinetool/react-spline';



export function Inicio(props) {


    return (
        <div className="mainContainer">
            <div>
            <Spline className={styles.spline} scene="https://prod.spline.design/jyYz8JohihQqSFXV/scene.splinecode" />
            </div>
        </div>
    );

};