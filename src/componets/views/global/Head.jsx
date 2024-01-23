import React from "react";
import css from "../../../styles/styles.css";


const {HeaderContainer, HeaderCSS} = css

const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#37C871',
    cursor: 'pointer',
    marginLeft: '10px'
}
const Head = () => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>TASKMAN</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button style={buttonCSS}>Main</button>
                    <button style={buttonCSS}>Stats</button>
                    <button style={buttonCSS}>Planing</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Head