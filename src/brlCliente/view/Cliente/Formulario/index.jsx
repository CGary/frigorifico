import * as React from "react";
import { useState } from "react";
import { addController } from "../../../controller";
import FormularioView from "./FormularioView";

export default function Formulario() {
  console.log({ Formulario: "render" });
  const add = addController();

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

        add({ codigo, nombre, fecha }).then(() => {
          resetValues();
        });
      },
    },
  };

  return <FormularioView {...propsFormularioView} />;
}
