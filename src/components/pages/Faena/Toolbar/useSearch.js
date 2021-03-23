import { useState } from "react";
export default () => {
  const [cliente, setCliente] = useState(null);
  const [desde, setDesde] = useState(new Date());
  const [hasta, setHasta] = useState(new Date());
  const props = {
    cliente: {
      label: "Cliente",
      value: cliente?.codigo || null,
      autoFocus: true,
      onChange: (item) => {
        setCliente(item);
      },
    },
    desde: {
      label: "Fecha desde",
      value: desde,
      onChange: (date) => {
        setDesde(date);
      },
    },
    hasta: {
      label: "Fecha hasta",
      value: hasta,
      onChange: (date) => {
        setHasta(date);
      },
    },
  };
  return props;
};
