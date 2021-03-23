import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "date-fns";

export default function ThemeProvider({ children }) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2196f3",
        light: "#6ec6ff",
        dark: "#0069c0",
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
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
