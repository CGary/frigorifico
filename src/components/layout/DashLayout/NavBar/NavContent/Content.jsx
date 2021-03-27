import * as React from "react";
import { BoxAvatar, Avatar } from "../styles";
import { Box, Divider, List } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import NavItem from "../NavItem";

export default function Content({ rutas, cerrar, displayName, email }) {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <BoxAvatar>
        <Avatar component={RouterLink} src={""} to="/app/account" />
        <Typography color="textPrimary" variant="h6">
          {displayName || email}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Operador
        </Typography>
      </BoxAvatar>
      <Divider />
      <Box p={2}>
        <List>
          {rutas.map((url, i) => (
            <NavItem key={"navitem-" + i} {...url} />
          ))}
          <Divider />
          <NavItem {...cerrar} />
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );
}
