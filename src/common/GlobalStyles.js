import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        display: grid;
        margin: 0;
        height: 100vh;
        width: 100vw;
        font-family: "Futura";
        color: #000d41;
    }
    #root {
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    `
export default GlobalStyle
