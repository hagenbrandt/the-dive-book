import { createGlobalStyle } from 'styled-components'
import { primaryFont, typeScale } from '../utils/typography'

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        max-width: 100%;
    }
    
    #root {
        height: 100%;
    }
    
    body {
        display: grid;
        margin: 0;
        height: 100vh;
        width: 100vw;
        font-family: ${primaryFont};
        color: #000d41;
    }
    
    a {
        text-decoration: none;
    }
    
    h1, h2 {
        font-size: ${typeScale['header1']};
    }
    
    h3 {
        font-size: ${typeScale['header2']};
    }
    
    h4 {
        font-size: ${typeScale['header3']};
    }
    
    h6 {
        font-size: ${typeScale['header4']};
    }
    
    p {
        font-size: ${typeScale['paragraph']};
    }
    
    span, li {
        font-size: ${typeScale['tagElement']};
    }
    `
export default GlobalStyle
