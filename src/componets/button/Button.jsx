import React from "react";
import styles from "./Button.module.css"



export default function Button({style, title, onClick, disabled=false}){
    return (
        <button
            style={style}
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >{title}</button>
    )
}