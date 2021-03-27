import * as React from "react";
import { useSelector } from "react-redux";
import Search from "../Search";

export default function SearchCliente({ value, ...rest }) {
  const arrSource = useSelector((state) => state.clienteReducer.arrCliente);

  const propsSearch = {
    ...rest,
    arrSource,
    valor: arrSource.find((cliente) => cliente.codigo === value) || null,
    getOptionLabel: (option) => option.codigo,
    filterOptions: (options, state) =>
      options.filter(
        (option) =>
          option.codigo
            .toLowerCase()
            .includes(state.inputValue.toLowerCase()) ||
          option.nombre.toLowerCase().includes(state.inputValue.toLowerCase())
      ),
    renderOption: (option) => option.codigo + " - " + option.nombre,
  };

  return <Search {...propsSearch} />;
}
