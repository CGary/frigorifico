import * as React from "react";
import { useState } from "react";
import { addController } from "../../../controller";
import FormularioView from "./FormularioView";

export default function Formulario() {
  console.log({ Formulario: "render" });
  const add = addController();

  const [recibo, setrecibo] = useState("");
  const [cliente, setcliente] = useState(null);
  const [idCliente, setidCliente] = useState(null);
  const [fecha, setfecha] = useState(null);
  const [monto, setmonto] = useState("");

  const resetValues = () => {
    setrecibo("");
    setcliente(null);
    setidCliente(null);
    setfecha(null);
    setmonto("");
    document.getElementById("recibo").focus();
  };

  const propsFormularioView = {
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

  return <FormularioView {...propsFormularioView} />;
}
