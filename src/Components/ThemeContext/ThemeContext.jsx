import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const ThemeContext = ({ children }) => {
  const theme = {
    font: {
      main: `'Poppins', sans-serif`,
    },
    colors: {
      main: "#180783",
      second: "#6460AA",
      third: "#F7B20A",
      black: "#000",
      white: "#fff",
      yellow: "#ffc404",
      teal: "#2a333a",
      // gray: " #F3F3F3",
      gray: "#CFCFCF",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;
