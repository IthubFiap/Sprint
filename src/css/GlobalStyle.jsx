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
    scrollbar-width: thin;
    scrollbar-color: #1391D9 #161515; 
}

body {
  font-family: "Teko", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

::-webkit-scrollbar {
    width: 12px; 
}

::-webkit-scrollbar-track {
    background-color: #161515; 
}

::-webkit-scrollbar-thumb {
    background-color: #1391D9; 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #3F7085; 
}

`

export default GlobalStyle;
