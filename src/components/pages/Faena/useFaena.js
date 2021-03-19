import { useState } from "react";
import { useAdd } from "../../../brlFaena/hooks";

export default () => {
  const add = useAdd();

  const [izq, setizq] = useState("");
  const [der, setder] = useState("");

  const props = {
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
        add({ izq, der }).then(() => {
          setizq("");
          setder("");
          document.getElementById("izq").focus();
        });
      },
    },
  };

  return props;
};
