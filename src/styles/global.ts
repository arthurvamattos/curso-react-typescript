import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
    height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
  }
`;
