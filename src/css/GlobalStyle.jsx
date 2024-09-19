import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

html {
    scroll-behavior: smooth;
}

body {
    display: grid;
    grid-template-areas:
        'nav nav nav nav'
        'home home home home'
        'sobre sobre sobre sobre'
        'pilotos pilotos pilotos pilotos'
        'login login login login';
    
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(5, auto); 
    font-size: 1rem;
}

`

export default GlobalStyle;
