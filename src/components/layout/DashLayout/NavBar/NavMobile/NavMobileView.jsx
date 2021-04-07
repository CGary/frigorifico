import * as React from "react";
import { useStylesMobile } from "../styles";
import { Drawer, Hidden } from "@material-ui/core";
import NavContent from "../NavContent";

export default function NavMobileView({ handlerClose, isMobileOpen }) {
  console.log(isMobileOpen);
  const classes = useStylesMobile();
  return (
    <Hidden mdUp>
      <Drawer
        classes={{ paper: classes.mobileDrawer }}
        anchor="left"
        onClose={handlerClose}
        open={isMobileOpen}
        variant="temporary"
      >
        <NavContent />
      </Drawer>
    </Hidden>
  );
}
