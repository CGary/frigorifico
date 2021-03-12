import * as React from "react";
import { AppBar, Hidden, IconButton, Toolbar, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { MdViewHeadline } from "react-icons/md";

export default function TopBar({ onMobileNavOpen }) {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <RouterLink to="/">
          <div>logo</div>
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MdViewHeadline size="36px" />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
