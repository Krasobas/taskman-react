import {useEffect, useState} from "react";
import WhiteBox from "../containers/WhiteBox";
import Input from "./input/Input";
import Button from "./button/Button";
import InputError from "./errors/InputError";

const AuthForm = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailDirty, setEmailDirty] = useState(false)
    const [passDirty, setPassDirty] = useState(false)
    const [emailError, setEmailError] = useState('Required')
    const [passError, setPassError] = useState('Required')
    const [invalidForm, setInvalidForm] = useState(true)

    const emailHandler = (email) => {
        console.log("in e handler")
        setEmail(email)
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!re.test(String(email).toLowerCase())) {
            setEmailError('Invalid email')
        } else {
            setEmailError('')
        }
    }

    const passHandler = (pass) => {
        setPass(pass)
        if(String(pass).length < 6) {
            setPassError('Password should contain at least 6 characters')
        } else {
            setPassError('')
        }
    }
    const blurHandler = (e) => {
        console.log(e.target.type)
        switch (e.target.type) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPassDirty(true)
                break
            default:
                setPassDirty(false)
                setEmailDirty(false)
        }
    }

    useEffect(() => {
        setInvalidForm(!!emailError || !!passError)
    }, [emailError, passError]);

    return (
            <WhiteBox>
                <h2 style={{marginBottom: '10px'}}>{title}</h2>
                <Input
                    type={"email"}
                    value={email}
                    onChange={(e) => emailHandler(e.target.value)}
                    placeholder={"Email"}
                    onBlur={e => blurHandler(e)}
                />
                {(emailDirty && emailError) && <InputError message={emailError}/>}
                <Input
                    type={"password"}
                    value={pass}
                    onChange={(e) => passHandler(e.target.value)}
                    placeholder={"Password"}
                    onBlur={e => blurHandler(e)}
                />
                {passDirty && passError && <InputError message={passError}/>}
                <Button
                    onClick={() => handleClick(email, pass)}
                    title={title}
                    disabled={invalidForm}
                />
            </WhiteBox>

    )
}

export default AuthForm