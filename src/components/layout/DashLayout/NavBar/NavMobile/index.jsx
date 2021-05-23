import * as React from "react";
import { useLocation } from "react-router-dom";
import { eventEmitter, changeNavEvent } from "../../../../../tools";
import NavMobileView from "./NavMobileView";

export default function NavMobile() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  console.log({ Mobile: "render" });

  React.useEffect(() => {
    const listener = eventEmitter.addListener(changeNavEvent, (show) => {
      setIsMobileOpen(show);
    });
    return () => {
      listener.remove();
    };
  }, []);

  const propsNavMobileView = {
    isMobileOpen,
    handlerClose: () => eventEmitter.emit(changeNavEvent, false),
  };

  return (
    <>
      <NavMobileView {...propsNavMobileView} />
      <ListenerToCloseMobilDrawer />
    </>
  );
}

const ListenerToCloseMobilDrawer = () => {
  const location = useLocation();

  React.useEffect(() => {
    eventEmitter.emit(changeNavEvent, false);
  }, [location.pathname]);

  return null;
};
