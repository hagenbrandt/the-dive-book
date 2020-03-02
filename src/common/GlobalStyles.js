import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        height: 100vh;
        width: 100vw;
        font-family: "Futura";
    }
    `
export default GlobalStyle
