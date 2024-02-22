import React from "react";
import Button from "../../button/Button";
import styles from './Header.module.css'
import {useAuth} from "../../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../../../store/slices/userSlice";

export default function Header(){
    const {isAuth} = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const title = pathname === '/login' ? 'Signup' : 'Login'
    const buttonPath = pathname === '/login' ? '/signup' : '/login'
    return (
            <header className={styles.headerContainer}>
                <div className={styles.logo}>TASKMAN</div>
                <div className={styles.headerMenu}>
                    {
                        isAuth ? (
                                <Button
                                    style={{marginLeft: '10px'}}
                                    title={'Logout'}
                                    onClick={() => dispatch(removeUser())}
                                ></Button>
                            )
                        : (
                        <Button
                            style={{marginLeft: '10px'}}
                            title={title}
                            onClick={() => navigate(buttonPath)}
                        ></Button>
                        )
                    }

                </div>

            </header>
    )
}