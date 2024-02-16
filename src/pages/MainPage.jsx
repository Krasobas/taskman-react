import React from "react";
import {Navigate} from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";


export default function MainPage(){
    const {isAuth, token} = useAuth();
    const dispatch = useDispatch();


    return isAuth ?
        (
            <div>
                <h1>Welcome</h1>
                <button
                    onClick={() => dispatch(removeUser())}
                >Log out</button>
            </div>
        ) :
        (
            <Navigate to="/login"/>
        )
}