import * as React from "react";
import useFirebaseInit from "../../firebase/useFirebaseInit";
import Routes from "./Routes";

export default function Init() {
  console.log({ Init: "render" });
  const { isInitializingUser } = useFirebaseInit();

  return !isInitializingUser && <Routes />;
}
