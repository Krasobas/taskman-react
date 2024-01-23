import React, {useState} from "react";
import css from "../../styles/form.css";

const {Input} = css


const InputComponent = ({type, maxLength, action, value}) => {

    const [placeholder, setPlaceholder] = useState(maxLength)

    return (
        <React.Fragment>
            <Input
                value={value}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={event => {
                    let text = event.target.value
                    setPlaceholder(placeholder - text.length)
                    console.log(placeholder)
                    action(text)
                }}
            />
        </React.Fragment>

    )
}

export default InputComponent