import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Alogin from "../pages/Alogin";
import Achangepass from "../pages/Achangepass";
import Aresetpass from "../pages/Aresetpass";
// import Asetpass from "../pages/Asetpass";
import Home from "../pages/Home";

const Rutas = (props) => {
  console.log({ Rutas: "render" });
  const { icLogin } = props;
  console.log({ rutasProps: props });

  const RutasLoged = () => (
    <Switch>
      <Route exact path="/Home" component={Home}></Route>
    </Switch>
  );
  return (
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
  );
};

const mapStateToProps = (reducers) => reducers.segReducer;
export default connect(mapStateToProps, {})(Rutas);
