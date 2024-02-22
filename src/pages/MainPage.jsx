import React from "react";
import {Navigate} from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";


export default function MainPage(){
    const {isAuth} = useAuth();
    console.log("main: ")
    console.log(isAuth)

    return isAuth ?
        (
            <div>
                <h1>Welcome</h1>
            </div>
        ) :
        (<Navigate to="/login"/>)
}