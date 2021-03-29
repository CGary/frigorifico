import * as React from "react";
import { useSelector } from "react-redux";
import { useFirebaseInit } from "../../firebase";
import LoggedInRoutes from "./LoggedInRoutes";
import LoggedOutRoutes from "./LoggedOutRoutes";

export default function Routes() {
  const { isInitializingUser } = useFirebaseInit();
  const isLogin = useSelector((state) => state.segReducer.isLogin);
  console.log({ Routes: "render", isInitializingUser, isLogin });

  return !isInitializingUser ? (
    isLogin ? (
      <LoggedInRoutes />
    ) : (
      <LoggedOutRoutes />
    )
  ) : null;
}
