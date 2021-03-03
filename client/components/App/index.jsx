import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStyles from "../../MainStyles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Rutas from "./Rutas";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#62d0ff",
        main: "#009fe0",
        dark: "#0071ae",
        contrastText: "white",
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
