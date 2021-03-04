import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useAuth, useUser } from "reactfire";
import { login, logout } from "../../redux/actions";

import Alogin from "../pages/Alogin";
import Achangepass from "../pages/Achangepass";
import Aresetpass from "../pages/Aresetpass";
// import Asetpass from "../pages/Asetpass";
import Home from "../pages/Home";

const Rutas = (props) => {
  console.log({ Rutas: "render" });
  const dispatch = useDispatch();
  const { icLogin } = props;
  const user = useUser();

  const RutasLoged = () => (
    <Switch>
      <Route exact path="/Home" component={Home}></Route>
    </Switch>
  );

  React.useEffect(() => {
    console.log({ user });
    if (user.data) {
      const { displayName, email, emailVerified, phoneNumber } = user.data;
      dispatch({
        type: login,
        payload: {
          icLogin: true,
          displayName,
          email,
          emailVerified,
          phoneNumber,
        },
      });
    } else {
      dispatch({
        type: logout,
      });
    }
  });

  return user.hasEmitted ? (
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
  ) : (
    <div>cargando...</div>
  );
};

const mapStateToProps = (reducers) => reducers.segReducer;
export default connect(mapStateToProps, {})(Rutas);
