
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import AuthForm from "./AuthForm";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSignup = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }))
                navigate("/")
            })
            .catch(console.error)
    }
    return(
        <AuthForm
            title={"Sign up"}
            handleClick={handleSignup}
        />
    )
}

export default Signup