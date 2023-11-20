import { createGlobalStyle } from 'styled-components'
import { black9, white9 } from './colors'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    list-style: none;
    font-family: 'Poppins', Arial, sans-serif;
    font-weight: 400;

    a { color: ${black9}; }
  }

  html {
    scroll-behavior: smooth;
    background: ${white9};

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`