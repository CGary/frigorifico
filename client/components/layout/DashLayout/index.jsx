import * as React from "react";
import { useStyles } from "./styles";
import { MainContainer } from "../../styled";
import TopBar from "./TopBar";
import NavBar from "./NavBar";

export default function DashLayout({ children }) {
  console.log({ DashLayout: "render" });
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <MainContainer>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </MainContainer>
  );
}
