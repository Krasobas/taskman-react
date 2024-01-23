import React from "react";
import css from "../../styles/form.css";

const {Button} = css;

const ButtonComponent = ({backgroundColor,title,onClick}) => {

    return (
        <Button backgroundColor={backgroundColor} onClick={onClick}>{title}</Button>
    )
}

export default ButtonComponent