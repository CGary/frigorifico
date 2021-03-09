import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { login, logout } from "../../redux/actions";
import { useLoading } from "../../components/common";

import Alogin from "../pages/Alogin";
import Achangepass from "../pages/Achangepass";
import Aresetpass from "../pages/Aresetpass";
// import Asetpass from "../pages/Asetpass";
import Home from "../pages/Home";

const Rutas = (props) => {
  console.log({ Rutas: "render" });
  const { isLogin, isLoading, dispatch } = props;
  const { setLoading } = useLoading();

  const RutasLoged = () => (
    <Switch>
      <Route exact path="/Home" component={Home}></Route>
    </Switch>
  );

  React.useEffect(() => {
    if (isLoading) {
      setLoading(true);
      console.log({ isLoading });
      const firebaseConfig = {
        apiKey: "AIzaSyCULVT0OJNT8ajZrA70JfpIf7nZ52olYLU",
        authDomain: "baseinicial.firebaseapp.com",
        projectId: "baseinicial",
        storageBucket: "baseinicial.appspot.com",
        messagingSenderId: "266787757316",
        appId: "1:266787757316:web:a20a669bf44fbccdd20451",
        measurementId: "G-V8ZE3635QB",
      };

      try {
        firebase.initializeApp(firebaseConfig);
      } catch (err) {
        console.log(err);
      }

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const { displayName, email, uid } = user;
          dispatch({
            type: login,
            payload: {
              isLoading: false,
              displayName,
              email,
              uid,
            },
          });
        } else {
          dispatch({
            type: logout,
            payload: {
              isLoading: false,
            },
          });
        }
        setLoading(false);
      });
    }
  }, []);

  return (
    <>
      {!isLoading && (
        <Switch>
          <Route exact path={["/", "/Alogin"]} component={Alogin}>
            {isLogin === true && <Redirect to="/Home" />}
          </Route>
          <Route exact path="/Achangepass" component={Achangepass}></Route>
          <Route exact path="/Aresetpass" component={Aresetpass}></Route>
          {/* <Route exact path="/Asetpass" component={Asetpass}></Route> */}

          {isLogin === true && <RutasLoged />}

          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
};

const mapStateToProps = (reducers) => reducers.segReducer;
export default connect(mapStateToProps)(Rutas);
