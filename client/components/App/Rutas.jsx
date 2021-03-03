import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Alogin from "../pages/Alogin";

const Rutas = () => {
  return (
    <Switch>
      <Route exact path={["/", "/Alogin"]} component={Alogin}></Route>
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = (reducers) => reducers.segReducer;
export default connect(mapStateToProps, {})(Rutas);
