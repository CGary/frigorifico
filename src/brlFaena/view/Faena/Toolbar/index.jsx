import * as React from "react";
import { useState } from "react";
import { Button, Box } from "@material-ui/core";
import Buscador from "./Buscador";
import TablaView from "./TablaView";
import { SearchCliente } from "../../../../components/common";
import { SearchIngresoCtrl } from "../../../controller";
import { getDateLocalToUTC } from "../../../../tools";

export default function Toolbar() {
  console.log({ Toolbar: "render" });

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [cliente, setCliente] = useState(null);
  const [desde, setDesde] = useState(new Date());
  const [hasta, setHasta] = useState(new Date());
  const fieldCliente = {
    label: "Cliente",
    value: cliente?.codigo || null,
    autoFocus: true,
    onChange: (item) => {
      setCliente(item);
    },
  };
  const fieldDesde = {
    label: "Fecha desde",
    value: desde,
    onChange: (date) => {
      setDesde(date);
    },
  };
  const fieldHasta = {
    label: "Fecha hasta",
    value: hasta,
    onChange: (date) => {
      setHasta(date);
    },
  };

  const propsBuscador = {
    fieldDesde,
    fieldHasta,
    open,
    handleClose,
  };

  const { setIngreso, arrIngreso } = SearchIngresoCtrl();
  const propsTablaView = {
    rowClick: (idIngreso) => () => {
      setIngreso(arrIngreso.find((row) => row.id === idIngreso));
      setOpen(false);
    },
    source: [
      ...arrIngreso.filter((item) => {
        let flagRow = true;

        if (fieldCliente?.value != null) {
          flagRow = item.cliente == fieldCliente.value;
        }

        const fDesde = new Date(getDateLocalToUTC(fieldDesde.value)).getTime();
        const fHasta = new Date(getDateLocalToUTC(fieldHasta.value)).getTime();
        const fRow = new Date(item.fecha).getTime();
        if (fRow < fDesde || fRow > fHasta) {
          flagRow = false;
        }

        return flagRow;
      }),
    ],
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-start" pl={3} pb={3}>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
          Buscar Ingreso
        </Button>
      </Box>
      <Buscador
        {...propsBuscador}
        ingresoGrid={() => <TablaView {...propsTablaView} />}
        searchCliente={() => <SearchCliente {...fieldCliente} />}
      />
    </>
  );
}
