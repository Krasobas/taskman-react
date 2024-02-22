
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import AuthForm from "./AuthForm";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate("/")
            })
            .catch((error) => {
                console.error("Login error:", error);
                alert("User not found!")
            })
    }

    return (
        <AuthForm
            title={"Login"}
            handleClick={handleLogin}
        />
    )
}

export default Login