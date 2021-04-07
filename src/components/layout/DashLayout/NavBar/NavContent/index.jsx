import * as React from "react";
import { useSelector } from "react-redux";
import { GiCow } from "react-icons/gi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { CgArrowLongRightE } from "react-icons/cg";
import NavContentView from "./NavContentView";

export default function NavContent() {
  console.log({ NavContent: "render" });
  const propsNavContentView = {
    displayName: useSelector((state) => state.segReducer.displayName),
    email: useSelector((state) => state.segReducer.email),
    rutas: [
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
    ],
    cerrar: {
      href: "/cerrar",
      title: "Cerrar Sesión",
      icon: IoMdLogOut,
    },
  };

  return <NavContentView {...propsNavContentView} />;
}
