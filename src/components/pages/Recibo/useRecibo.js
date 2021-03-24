import { useState } from "react";
import { useAdd } from "../../../brlRecibo";

export default () => {
  const add = useAdd();

  const [recibo, setrecibo] = useState("");
  const [cliente, setcliente] = useState(null);
  const [idCliente, setidCliente] = useState(null);
  const [fecha, setfecha] = useState(null);
  const [monto, setmonto] = useState("");

  const props = {
    recibo: {
      id: "recibo",
      label: "Nro de Recibo",
      value: recibo,
      onChange: (e) => {
        setrecibo(e.target.value);
      },
    },
    cliente: {
      label: "Cliente",
      value: cliente,
      onChange: (value) => {
        setcliente(value.codigo);
        setidCliente(value.id);
      },
    },
    fecha: {
      label: "Fecha",
      value: fecha,
      onChange: (date) => {
        setfecha(date);
      },
    },
    monto: {
      type: "number",
      label: "Monto",
      value: monto,
      onChange: (e) => {
        setmonto(e.target.value);
      },
    },
    form: {
      onSubmit: (e) => {
        e.preventDefault();
        const query = {
          recibo,
          cliente,
          idCliente,
          fecha,
          monto,
        };
        add(query).then(() => {
          resetValues();
        });
      },
    },
  };

  const resetValues = () => {
    setrecibo("");
    setcliente(null);
    setidCliente(null);
    setfecha(null);
    setmonto("");
    document.getElementById("recibo").focus();
  };

  return props;
};
