import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MainContainer, ContainerVertical } from "../../styled";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import { MdViewHeadline } from "react-icons/md";

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
        </Toolbar>
      </AppBar>
      <ContainerVertical>{children}</ContainerVertical>
    </MainContainer>
  );
}
