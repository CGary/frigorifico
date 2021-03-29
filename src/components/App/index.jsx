import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStyles from "../../MainStyles";
import ThemeProvider from "./ThemeProvider";
import Routes from "./Routes";
import { Loading, Dialogo } from "../common";

export default function App() {
  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <ThemeProvider>
          <Routes />
          <Loading />
          <Dialogo />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
