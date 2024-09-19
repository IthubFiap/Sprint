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
  font-family: "Teko", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

`

export default GlobalStyle;
