import React, {useState} from "react";
import Head from '../views/global/Head'
import Foot from "../views/global/Foot";
import InputComponent from "../comps/Input";
import ButtonComponent from "../comps/Button";
import css from "../../styles/form.css";

const{FormContainer} = css


const Main = () => {
    const [value, setValue] = useState("")
    const [type, setType] = useState("")
    const [comment, setComment] = useState("")
    const params = (type, maxLength) => {
        return {
            type: type,
            maxLength: maxLength
        }
    }

    const validation = () => {
        if (value.length > 2 && type) {
            console.log("valid")
            setValue("")
            setComment("")
            setType("")
        }
        else console.log("invalid")
    }



    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent value={value} action={setValue} {...params( "text", 100)}/>
                <InputComponent value={type} action={setType} {...params( "text", 100)}/>
                <InputComponent value={comment} action={setComment} {...params( "text", 100)}/>
                <ButtonComponent
                    backgroundColor={
                    value.length < 3 || type.length < 3 ? "rgb(229, 229, 229)" : "rgb(176, 243, 71)"
                    }
                    title="Save transaction"
                    onClick={validation}
                />
            </FormContainer>

            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main