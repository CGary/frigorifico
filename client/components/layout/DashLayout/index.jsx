import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MainContainer, ContainerVertical } from "../../styled";
import { AppBar, Toolbar } from "@material-ui/core";

export default function DashLayout({ children }) {
  return (
    <MainContainer>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <RouterLink to="/">
            <div>logo</div>
          </RouterLink>
        </Toolbar>
      </AppBar>
      <ContainerVertical>{children}</ContainerVertical>
    </MainContainer>
  );
}
