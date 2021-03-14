import * as React from "react";
import { BoxAvatar, Avatar } from "./styles";
import { Box, Divider, List } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { GiCow, GiGearHammer } from "react-icons/gi";
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
          <NavItem href={"/faena"} title={"Faena"} icon={GiCow} />
          <NavItem
            href={"/ingreso"}
            title={"Registrar Ingreso"}
            icon={CgArrowLongRightE}
          />
          <NavItem
            href={"/recibo"}
            title={"Registrar Recibo"}
            icon={FaFileInvoiceDollar}
          />
          <NavItem
            href={"/cliente"}
            title={"Agregar Cliente"}
            icon={MdPersonAdd}
          />
          <NavItem
            href={"/reportes"}
            title={"Reportes"}
            icon={HiDocumentReport}
          />
          <NavItem href={"/adm"} title={"Adminstración"} icon={GiGearHammer} />
          <Divider />
          <NavItem href={"/cerrar"} title={"Cerrar Sesión"} icon={IoMdLogOut} />
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );
}
