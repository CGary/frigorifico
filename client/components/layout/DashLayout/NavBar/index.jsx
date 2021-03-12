import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Avatar, Box, Divider, Drawer, Hidden, List } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const user = {
  avatar: "", //"/static/images/avatars/avatar_6.png",
  jobTitle: "Operador",
  name: "Jose Sanabria",
};

export default function NavBar({ onMobileClose, openMobile }) {
  console.log({ NavBar: "render" });
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List></List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden mdUp>
        <Drawer
          classes={{ paper: classes.mobileDrawer }}
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          classes={{ paper: classes.desktopDrawer }}
          anchor="left"
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};
