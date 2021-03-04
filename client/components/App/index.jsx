import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStyles from "../../MainStyles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Rutas from "./Rutas";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
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
  React.useEffect(() => {
    // console.log({ firebase });
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        dispatch({ type: logout });
      }
      setLoading(false);
      console.log({ user });
    });
  }, []);
  return (
    <>
      <MainStyles />
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          {loading ? <div>cargando...</div> : <Rutas />}
        </MuiThemeProvider>
      </BrowserRouter>
    </>
  );
}
