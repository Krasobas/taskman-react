import React from "react";
import styles from './Input.module.css'



export default function Input({type, placeholder, maxLength, action, value}) {
    return (
        <input
            className={styles.input}
            value={value}
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={action}
        />
    )
}