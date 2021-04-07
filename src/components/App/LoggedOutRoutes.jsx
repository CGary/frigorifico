import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Alogin from "../../brlSeguridad/view/Alogin";
import Aresetpass from "../../brlSeguridad/view/Aresetpass";

export default function LoggedOutRoutes() {
  const routes = [
    { exact: true, path: ["/", "/login"], component: Alogin },
    { exact: true, path: "/resetpass", component: Aresetpass },
  ];
  return (
    <MainLayout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </MainLayout>
  );
}
