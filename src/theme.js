import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#407EC7",
    background: "#fff",
    text: "#000",
    textLight: "rgba(0, 0, 0, 0.8)",
    borderLight: "rgba(0, 0, 0, 0.6)",
    card: '#F6F6F6',
    primaryLight: "#E3F0FF",
    danger: "#e73d3d",

    neutral10: "rgba(0, 0, 0, 0.1)",
    neutral5: "rgba(0, 0, 0, 0.03)",
  },
  font: {
    family: "'Poppins', sans-serif",
    sizes: {
      xxs: "0.5rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem",
      xxxl: "3rem",
    },
  },
  spacings: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px",
  },
  media: {
    sm: "(min-width: 320px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1440px)",
  },
};

export const GlobalStyles = createGlobalStyle`
  html, body, * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  body, #root {
    background-color: #fff;
  }

  #root {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    min-height: 100vh;
  }

  #app-container {
    width: 80%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  @media screen and (max-width: 720px) {
    html, body {
      font-size: 12px;
    }
  }
`;
