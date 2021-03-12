import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MainContainer } from "../../styled";
import { AppBar, Hidden, IconButton, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { MdViewHeadline } from "react-icons/md";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

export default function DashLayout({ children }) {
  console.log({ DashLayout: "render" });
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <MainContainer>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <RouterLink to="/">
            <div>logo</div>
          </RouterLink>
          <Box flexGrow={1} />
          {/* <Opcion /> */}
          <Hidden mdUp>
            <IconButton color="inherit" onClick={() => setMobileNavOpen(true)}>
              <MdViewHeadline size="36px" />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
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
