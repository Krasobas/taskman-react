import React from "react";
import Button from "../../button/Button";
import styles from './Header.module.css'

export default function Header(){
    return (
            <header className={styles.headerContainer}>
                <div className={styles.logo}>TASKMAN</div>
                <div className={styles.headerMenu}>
                    <Button title={'MainPage'}></Button>
                    <Button style={{marginLeft: '10px'}} title={'Logout'}></Button>
                </div>

            </header>
    )
}