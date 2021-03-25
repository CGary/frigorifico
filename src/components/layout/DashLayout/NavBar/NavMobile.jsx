import * as React from "react";
import { useStylesMobile } from "./styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Drawer, Hidden } from "@material-ui/core";
import NavContent from "./NavContent";
import { useSelector, useDispatch } from "react-redux";
import { mobileClose } from "../../../../redux";

export default function NavMobile() {
  console.log({ Mobile: "render" });
  const dispatch = useDispatch();
  const { isMobileOpen } = useSelector((state) => state.navMobileReducer);
  const classes = useStylesMobile();

  const handlerClose = () => {
    dispatch({ type: mobileClose });
  };

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
      <ListenerToCloseMobilDrawer />
    </Hidden>
  );
}

const ListenerToCloseMobilDrawer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: mobileClose });
  }, [location.pathname]);

  return null;
};
