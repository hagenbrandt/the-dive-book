import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    #root {
        height: 100%;
    }
    body {
        display: grid;
        margin: 0;
        height: 100vh;
        width: 100vw;
        font-family: "Sonorous", sans-serif;
        color: #000d41;
    }
    a {
        text-decoration: none;
    }
    `
export default GlobalStyle
