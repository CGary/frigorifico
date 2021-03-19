import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import DashLayout from "../layout/DashLayout";
import MainLayout from "../layout/MainLayout";

import Alogin from "../pages/Alogin";
import Aresetpass from "../pages/Aresetpass";

import Faena from "../pages/Faena";
import Ingreso from "../pages/Ingreso";
import Recibo from "../pages/Recibo";
import Cliente from "../pages/Cliente";
import Cerrar from "../pages/Cerrar";

export default function Routes() {
  const { isLogin } = useSelector((state) => state.segReducer);
  console.log({ Routes: "render", isLogin });

  const LoggedInRoutes = () => (
    <Switch>
      <DashLayout>
        <Route exact path="/faena" component={Faena}></Route>
        <Route exact path="/ingreso" component={Ingreso}></Route>
        <Route exact path="/cerrar" component={Cerrar}></Route>
        <Route exact path="/recibo" component={Recibo}></Route>
        <Route exact path="/cliente" component={Cliente}></Route>
        <Route path="*">
          <Redirect to="/cliente" />
        </Route>
      </DashLayout>
    </Switch>
  );

  const LoggedOutRoutes = () => (
    <Switch>
      <MainLayout>
        <Route exact path={["/", "/login"]} component={Alogin}></Route>
        <Route exact path="/resetpass" component={Aresetpass}></Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </MainLayout>
    </Switch>
  );

  return isLogin ? <LoggedInRoutes /> : <LoggedOutRoutes />;
}
