import React from "react";
import styles from './Task.module.css'
export default function Task(task) {
    const {id, title, completed} = task
    return(
        <div className={styles.task} id={id}>
            <input type={"checkbox"} checked={completed} readOnly/>
            <p className={`${styles.title} ${completed ? styles.completedTask : ''}`}>{title}</p>

        </div>
    )
}