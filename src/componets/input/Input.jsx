import React from "react";
import styles from './Input.module.css'



export default function Input({type, placeholder, maxLength, onChange, value, onBlur}) {
    return (
        <>
            <label for={'input'} className={styles.label}>{placeholder}</label>
            <input
                name={'input'}
                className={styles.input}
                value={value}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={onChange}
                onBlur={onBlur}
            />
        </>

    )
}