import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { mobileClose } from "../../../../../redux";
import Mobile from "./Mobile";

export default function NavMobile() {
  console.log({ Mobile: "render" });
  const dispatch = useDispatch();

  const propsMobile = {
    isMobileOpen: useSelector((state) => state.navMobileReducer.isMobileOpen),
    handlerClose: () => dispatch({ type: mobileClose }),
  };

  return (
    <>
      <Mobile {...propsMobile} />
      <ListenerToCloseMobilDrawer />
    </>
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
