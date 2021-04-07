import * as React from "react";
import FormularioView from "./FormularioView";
import { useState } from "react";
import { useAdd } from "../../..";
import { useSelector } from "react-redux";

export default function Formulario() {
  console.log({ Form: "render" });
  const add = useAdd();

  const [izq, setizq] = useState("");
  const [der, setder] = useState("");

  const { fecha, nombre, cliente, refIngreso } = useSelector(
    (state) => state.faenaReducer.faena
  );

  const propsFormularioView = {
    fecha,
    nombre,
    cliente,
    izq: {
      id: "izq",
      type: "number",
      label: "Peso Izquierda",
      value: izq,
      onChange: (e) => {
        setizq(e.target.value);
      },
    },
    der: {
      type: "number",
      label: "Peso Derecha",
      value: der,
      onChange: (e) => {
        setder(e.target.value);
      },
    },
    form: {
      onSubmit: (e) => {
        e.preventDefault();
        add({ izq, der, refIngreso }).then(() => {
          setizq("");
          setder("");
          document.getElementById("izq").focus();
        });
      },
    },
  };

  return cliente ? <FormularioView {...propsFormularioView} /> : null;
}
