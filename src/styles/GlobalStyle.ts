import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set default font family */
  body {
    font-family: Arial, sans-serif;
  }

  /* Set default font size and line height */
  html {
    font-size: 16px;
    line-height: 1.5;
  }

  /* Remove list styles */
  ul,
  ol {
    list-style: none;
  }

  /* Remove anchor underline */
  a {
    text-decoration: none;
  }

  /* Set default button styles */
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export default GlobalStyle
