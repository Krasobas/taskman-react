import styled from "styled-components";

const css = {
    // naming: start by Uppercase because it's a component
    HeaderContainer: styled.header`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 100%;
      height: 80px;
      background-color: #ffd772;
      padding: 0 30px;
    `,
    FooterContainer: styled.footer`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 100%;
      height: 80px;
      background-color: #37C871;
    `,
    HeaderCSS: {
        Logo: styled.div`
          font-size: 2em;
          color: #2C2D2D;
          font-weight: bolder;
          letter-spacing: 3px;
        `,
        MenuContainer: styled.div`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          position: relative;
        `
    }
}

export default css