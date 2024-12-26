import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Popins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }

  button{
    background-color: unset;
    border: unset;
    cursor: pointer;
  }

section {
  padding: 100px 0;

  @media ${theme.media.mobile} {
    padding: 90px 0;
  }
}

  h3 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 48px;
    color: ${theme.colors.font};
  }
  
  h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 72px;
    color: ${theme.colors.font};
  }
  p{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.font};
  }
`