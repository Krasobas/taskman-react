import React from "react";
import styles from "./Button.module.css"



export default function Button({style, title, onClick}){
    return (
        <button style={style} className={styles.button} onClick={onClick}>{title}</button>
    )
}