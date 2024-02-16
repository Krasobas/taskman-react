import React from 'react';
import {Link} from "react-router-dom";
import Login from "../componets/Login";

export default function LoginPage () {

    return (
        <div>
            <Login/>
            <p>
                Or <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
}