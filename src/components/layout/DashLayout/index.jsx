import * as React from "react";
import { useStyles } from "./styles";
import { MainContainer } from "../../styled";
import TopBar from "./TopBar";
import NavDesktop from "./NavBar/NavDesktop";
import NavMobile from "./NavBar/NavMobile";

export default function DashLayout({ children }) {
  console.log({ DashLayout: "render" });
  const classes = useStyles();

  return (
    <MainContainer className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      <NavDesktop />
      <NavMobile />
    </MainContainer>
  );
}
