import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { MainContainer } from "../../styled";
import { AppBar, Toolbar } from "@material-ui/core";

export default function MainLayout({ children }) {
  return (
    <MainContainer>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <RouterLink to="/">
            <div>logo</div>
          </RouterLink>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs">{children}</Container>
    </MainContainer>
  );
}
