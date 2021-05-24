import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashLayout from "../layout/DashLayout";
import Faena from "../../module/faena/view/Faena";
import Ingreso from "../../module/ingreso/view/Ingreso";
import Recibo from "../../module/recibo/view/Recibo";
import Cliente from "../../module/cliente/view/Cliente";
import Cerrar from "../../module/seguridad/view/Logout";
import { useSnapshots } from "../../firebase";

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
