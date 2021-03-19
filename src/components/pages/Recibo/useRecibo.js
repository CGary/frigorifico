import { useState } from "react";
import { useAdd } from "../../../brlRecibo/hooks";

export default () => {
  const add = useAdd();

  const [recibo, setrecibo] = useState("");
  const [cliente, setcliente] = useState("");
  const [fecha, setfecha] = useState(null);
  const [monto, setmonto] = useState("");

  const props = {
    recibo: {
      label: "Nro de Recibo",
      value: recibo,
      onChange: (e) => {
        setrecibo(e.target.value);
      },
    },
    cliente: {
      label: "Cliente",
      value: cliente,
      onChange: (e) => {
        setcliente(e.target.value);
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
    setrecibo;
    setcliente("");
    setfecha(null);
    setmonto("");
  };

  return props;
};
