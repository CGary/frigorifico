import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { mobileClose } from "../../../../../redux";
import NavMobileView from "./NavMobileView";

export default function NavMobile() {
  console.log({ Mobile: "render" });
  const dispatch = useDispatch();

  const propsNavMobileView = {
    isMobileOpen: useSelector((state) => state.navMobileReducer.isMobileOpen),
    handlerClose: () => dispatch({ type: mobileClose }),
  };

  return (
    <>
      <NavMobileView {...propsNavMobileView} />
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
