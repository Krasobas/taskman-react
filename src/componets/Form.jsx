import {useState} from "react";
import WhiteBox from "../containers/WhiteBox";
import Input from "./input/Input";
import Button from "./button/Button";

const Form = ({title, handleClick}) => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    return (
        <WhiteBox>
            <h2 style={{marginBottom: '10px'}}>{title}</h2>
            <Input
                type={"email"}
                value={email}
                action={(e) => setEmail(e.target.value)}
                placeholder={"Email"}
            />
            <Input
                type={"password"}
                value={pass}
                action={(e) => setPass(e.target.value)}
                placeholder={"Password"}
            />
            <Button
                style={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
            }}
                onClick={() => handleClick(email, pass)}
                title={title}
            />
        </WhiteBox>
    )
}

export {Form}