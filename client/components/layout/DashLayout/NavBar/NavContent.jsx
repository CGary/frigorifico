import * as React from "react";
import { useStylesNavContent } from "./styles";
import { Avatar, Box, Divider, List } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const user = {
  avatar: "", //"/static/images/avatars/avatar_6.png",
  jobTitle: "Operador",
  name: "Jose Sanabria",
};

export default function NavContent() {
  console.log({ NavContent: "render" });
  const classes = useStylesNavContent();
  return (
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
}
