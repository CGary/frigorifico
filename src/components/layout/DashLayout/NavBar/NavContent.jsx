import * as React from "react";
import { BoxAvatar, Avatar } from "./styles";
import { Box, Divider, List } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { GiCow } from "react-icons/gi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { CgArrowLongRightE } from "react-icons/cg";

export default function NavContent() {
  console.log({ NavContent: "render" });
  const { displayName, email } = useSelector((state) => state.segReducer);

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

const rutas = [
  {
    href: "/faena",
    title: "Faena",
    icon: GiCow,
  },
  {
    href: "/ingreso",
    title: "Registrar Ingreso",
    icon: CgArrowLongRightE,
  },
  {
    href: "/recibo",
    title: "Registrar Recibo",
    icon: FaFileInvoiceDollar,
  },
  {
    href: "/cliente",
    title: "Agregar Cliente",
    icon: MdPersonAdd,
  },
  {
    href: "/reportes",
    title: "Reportes",
    icon: HiDocumentReport,
  },
];
const cerrar = {
  href: "/cerrar",
  title: "Cerrar Sesión",
  icon: IoMdLogOut,
};
