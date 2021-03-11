import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MainContainer, ContainerVertical } from "../../styled";
import { AppBar, Hidden, IconButton, Toolbar, Box } from "@material-ui/core";
import { MdViewHeadline } from "react-icons/md";
import Opcion from "./Opcion";

export default function DashLayout({ children }) {
  return (
    <MainContainer>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              // onClick={onMobileNavOpen}
            >
              <MdViewHeadline size="24px" />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <RouterLink to="/">
              <div>logo</div>
            </RouterLink>
          </Hidden>
          <Box flexGrow={1} />
          <Opcion />
        </Toolbar>
      </AppBar>
      <ContainerVertical>{children}</ContainerVertical>
    </MainContainer>
  );
}
