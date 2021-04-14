import * as React from "react";
import { AppBar, Hidden, IconButton, Toolbar, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { MdViewHeadline } from "react-icons/md";
import { eventEmitter, changeNavEvent } from "../../../tools";

export default function TopBar() {
  const handlerClick = () => {
    eventEmitter.emit(changeNavEvent, false);
  };
  return (
    <AppBar position="sticky" elevation={0} style={{ height: "64px" }}>
      <Toolbar>
        <RouterLink to="/">
          <div>logo</div>
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handlerClick}>
            <MdViewHeadline size="36px" />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
