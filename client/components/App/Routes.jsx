import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Alogin from "../pages/Alogin";
import Aresetpass from "../pages/Aresetpass";
import Home from "../pages/Home";

export default function Routes() {
  console.log({ Routes: "render" });
  const { isLogin } = useSelector((state) => state.segReducer);

  const LoggedInRoutes = () => (
    <Switch>
      <Route exact path="/home" component={Home}></Route>

      <Redirect to="/home" />
    </Switch>
  );

  const LoggedOutRoutes = () => (
    <Switch>
      <Route exact path={"/login"} component={Alogin}></Route>
      <Route exact path="/resetpass" component={Aresetpass}></Route>

      <Redirect to="/login" />
    </Switch>
  );

  return isLogin ? <LoggedInRoutes /> : <LoggedOutRoutes />;
}
