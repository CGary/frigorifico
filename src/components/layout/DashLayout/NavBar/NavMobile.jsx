import * as React from "react";
import { useStylesMobile } from "./styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Drawer, Hidden } from "@material-ui/core";
import NavContent from "./NavContent";
import { connect } from "react-redux";
import { mobileClose } from "../../../../redux/actions";

const NavMobile = ({ isMobileOpen, dispatch }) => {
  console.log({ Mobile: "render" });

  const classes = useStylesMobile();
  const location = useLocation();

  const handlerClose = () => {
    dispatch({ type: mobileClose });
  };

  useEffect(() => {
    if (isMobileOpen) {
      dispatch({ type: mobileClose });
    }
  }, [location.pathname]);

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
};

const mapStateToProps = (reducers) => reducers.navMobileReducer;
export default connect(mapStateToProps)(NavMobile);
