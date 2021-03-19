import { useState } from "react";
import { useAdd } from "../../../brlIngreso/hooks";

export default () => {
  const add = useAdd();

  const [cliente, setcliente] = useState("");
  const [fecha, setfecha] = useState(null);
  const [cantidad, setcantidad] = useState("");
  const [isLimpieza, setisLimpieza] = useState(false);
  const [isTransporte, setisTransporte] = useState(false);

  const props = {
    cliente: {
      id: "cliente",
      label: "Cliente",
      value: cliente,
      onChange: (e) => {
        setcliente(e.target.value);
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
          cliente,
          fecha,
          cantidad,
          isLimpieza,
          isTransporte,
        };
        // console.log({ query });
        add(query).then(() => {
          resetValues();
        });
      },
    },
  };

  const resetValues = () => {
    setcliente("");
    setfecha(null);
    setcantidad("");
    setisLimpieza(false);
    setisTransporte(false);
    document.getElementById("cliente").focus();
  };

  return props;
};
