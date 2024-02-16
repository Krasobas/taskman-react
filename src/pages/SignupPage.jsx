import React from "react";
import {Link} from "react-router-dom";
import Signup from "../componets/Signup";

export default function SignupPage () {
    return (
        <div>
            <Signup/>
            <p>
                Or <Link to="/login">Login</Link>
            </p>
        </div>
    )
}