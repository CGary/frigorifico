import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStyles from "../../MainStyles";
import ThemeProvider from "./ThemeProvider";
import Init from "./Init";
import { Loading } from "../common";

export default function App() {
  console.log({ App: "renders" });

  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <ThemeProvider>
          <Init />
          <Loading />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
