import React from "react";
import styles from "./WhiteBox.module.css"

export default function WhiteBox({children}) {
    return <div className={styles.whiteBox}>{children}</div>
}