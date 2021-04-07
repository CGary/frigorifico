import * as React from "react";
import { useState } from "react";
import { useAdd } from "../../..";
import FormularioView from "./FormularioView";

export default function Formulario() {
  console.log({ Formulario: "render" });
  const add = useAdd();

  const [codigo, setcodigo] = useState("");
  const [nombre, setnombre] = useState("");
  const [fecha, setfecha] = useState(null);

  const resetValues = () => {
    setcodigo("");
    setfecha(null);
    setnombre("");
  };

  const propsFormularioView = {
    codigo: {
      label: "Código Cliente",
      value: codigo,
      onChange: (e) => {
        setcodigo(e.target.value);
      },
    },
    nombre: {
      label: "Nombres",
      value: nombre,
      onChange: (e) => {
        setnombre(e.target.value);
      },
    },
    fecha: {
      label: "Fecha de Ingreso",
      value: fecha,
      onChange: (date) => {
        setfecha(date);
      },
    },
    form: {
      onSubmit: (e) => {
        e.preventDefault();
        const query = {
          codigo,
          nombre,
          fecha,
        };
        // console.log({ query });
        add(query).then(() => {
          resetValues();
        });
      },
    },
  };

  return <FormularioView {...propsFormularioView} />;
}
