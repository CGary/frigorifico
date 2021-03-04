import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStyles from "../../MainStyles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Rutas from "./Rutas";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1976d2",
        light: "#63a4ff",
        dark: "#004ba0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#d32f2f",
        light: "#ff6659",
        dark: "#9a0007",
        contrastText: "#fff",
      },
    },
  });
  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Rutas />
        </MuiThemeProvider>
      </BrowserRouter>
    </>
  );
}
