import * as React from "react";
import { useState } from "react";
import { addIngresoCtrl } from "../../../controller";
import FormularioView from "./FormularioView";

export default function Formulario() {
  console.log({ Form: "render" });
  const add = addIngresoCtrl();

  const [cliente, setcliente] = useState(null);
  const [idCliente, setidCliente] = useState(null);
  const [fecha, setfecha] = useState(null);
  const [cantidad, setcantidad] = useState("");
  const [isLimpieza, setisLimpieza] = useState(false);
  const [isTransporte, setisTransporte] = useState(false);

  const resetValues = () => {
    setcliente(null);
    setidCliente(null);
    setfecha(null);
    setcantidad("");
    setisLimpieza(false);
    setisTransporte(false);
    document.getElementById("cliente").focus();
  };

  const propsFormularioView = {
    cliente: {
      id: "cliente",
      label: "Cliente",
      value: cliente,
      autoFocus: true,
      onChange: (item) => {
        setcliente(item.codigo);
        setidCliente(item.id);
      },
    },
    cantidad: {
      type: "number",
      label: "Cantidad",
      value: cantidad,
      onChange: (e) => {
        setcantidad(e.target.value);
      },
    },
    fecha: {
      label: "Fecha",
      value: fecha,
      onChange: (date) => {
        setfecha(date);
      },
    },
    isLimpieza: {
      label: "Limpieza",
      checked: isLimpieza,
      onChange: (e) => {
        setisLimpieza(e.target.checked);
      },
    },
    isTransporte: {
      label: "Transporte",
      checked: isTransporte,
      onChange: (e) => {
        setisTransporte(e.target.checked);
      },
    },
    form: {
      onSubmit: (e) => {
        e.preventDefault();
        const query = {
          idCliente,
          fecha,
          cantidad,
          isLimpieza,
          isTransporte,
        };
        console.log(query);
        add(query).then(() => {
          resetValues();
        });
      },
    },
  };

  return <FormularioView {...propsFormularioView} />;
}
