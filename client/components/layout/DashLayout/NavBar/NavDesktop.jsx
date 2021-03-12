import * as React from "react";
import { useStylesDesktop } from "./styles";
import { Drawer, Hidden } from "@material-ui/core";
import NavContent from "./NavContent";

export default function NavDesktop() {
  console.log({ Desktop: "render" });
  const classes = useStylesDesktop();
  return (
    <Hidden smDown>
      <Drawer
        classes={{ paper: classes.desktopDrawer }}
        anchor="left"
        open
        variant="persistent"
      >
        <NavContent />
      </Drawer>
    </Hidden>
  );
}
