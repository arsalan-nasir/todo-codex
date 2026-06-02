import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family:
      "Plus Jakarta Sans",
      "Segoe UI",
      sans-serif;
    color: #0f172a;
    background:
      radial-gradient(circle at top, rgba(249, 115, 22, 0.16), transparent 34%),
      linear-gradient(180deg, #fff7ed 0%, #ffffff 45%, #f8fafc 100%);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
`;
