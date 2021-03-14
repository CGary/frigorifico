import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStyles from "../../MainStyles";
import ThemeProvider from "./ThemeProvider";
import Init from "./Init";
import { Loading, Dialogo } from "../common";

export default function App() {
  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <ThemeProvider>
          <Init />
          <Loading />
          <Dialogo />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
