import * as React from "react";
import { DrawerDesktop } from "./styles";
import { Hidden } from "@material-ui/core";
import NavContent from "./NavContent";

export default function NavDesktop() {
  console.log({ Desktop: "render" });
  return (
    <Hidden smDown>
      <DrawerDesktop anchor="left" open variant="persistent">
        <NavContent />
      </DrawerDesktop>
    </Hidden>
  );
}
