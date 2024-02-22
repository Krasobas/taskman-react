import React from 'react'
import styles from './Error.module.css'
export default function InputError(props) {
    const {message} = props
    return <div className={styles.inputError}>{message}</div>
}