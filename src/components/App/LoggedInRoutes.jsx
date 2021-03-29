import * as React from "react";
import { useSnapshots } from "../../firebase";
import { Switch, Route, Redirect } from "react-router-dom";
import DashLayout from "../layout/DashLayout";
import Faena from "../pages/Faena";
import Ingreso from "../pages/Ingreso";
import Recibo from "../pages/Recibo";
import Cliente from "../pages/Cliente";
import Cerrar from "../pages/Cerrar";

export default function LoggedInRoutes() {
  useSnapshots();

  const routes = [
    { exact: true, path: "/faena", component: Faena },
    { exact: true, path: "/ingreso", component: Ingreso },
    { exact: true, path: "/cerrar", component: Cerrar },
    { exact: true, path: "/recibo", component: Recibo },
    { exact: true, path: "/cliente", component: Cliente },
  ];
  return (
    <DashLayout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="*">
          <Redirect to="/faena" />
        </Route>
      </Switch>
    </DashLayout>
  );
}
