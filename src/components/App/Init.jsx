import * as React from "react";
import { useFirebaseInit, useSnapshots } from "../../firebase";
import Routes from "./Routes";

export default function Init() {
  console.log({ Init: "render" });
  const { isInitializingUser } = useFirebaseInit();
  useSnapshots();

  return !isInitializingUser && <Routes />;
}
