import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import { Loading } from "../common";
import useLoading from "../common/Loading/useLoading";

import Alogin from "../pages/Alogin";
import Achangepass from "../pages/Achangepass";
import Aresetpass from "../pages/Aresetpass";
// import Asetpass from "../pages/Asetpass";
import Home from "../pages/Home";

const Rutas = (props) => {
  console.log({ Rutas: "render" });
  const dispatch = useDispatch();
  const { icLogin } = props;
  const { setLoading } = useLoading();

  const RutasLoged = () => (
    <Switch>
      <Route exact path="/Home" component={Home}></Route>
    </Switch>
  );

  React.useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        dispatch({ type: logout });
      }
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Switch>
        <Route exact path={["/", "/Alogin"]} component={Alogin}>
          {icLogin === true && <Redirect to="/Home" />}
        </Route>
        <Route exact path="/Achangepass" component={Achangepass}></Route>
        <Route exact path="/Aresetpass" component={Aresetpass}></Route>
        {/* <Route exact path="/Asetpass" component={Asetpass}></Route> */}

        {icLogin === true && <RutasLoged />}

        <Redirect to="/" />
      </Switch>
      <Loading />
    </>
  );
};

const mapStateToProps = (reducers) => reducers.segReducer;
export default connect(mapStateToProps, {})(Rutas);
