import * as React from "react";
import { useStylesNavContent } from "./styles";
import { Avatar, Box, Divider, List } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import NavItem from "./NavItem";

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
        <List>
          <NavItem href={"/faena"} title={"Faena"} />
          <NavItem href={"/ingreso"} title={"Registrar Ingreso"} />
          <NavItem href={"/recibo"} title={"Registrar Recibo"} />
          <NavItem href={"/cliente"} title={"Agregar Cliente"} />
          <NavItem href={"/reportes"} title={"Reportes"} />
          <NavItem href={"/adm"} title={"Adminstración"} />
          <Divider />
          <NavItem href={"/cerrar"} title={"Cerrar Sesión"} />
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );
}
