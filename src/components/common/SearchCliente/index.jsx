import * as React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function SearchCliente({ onChange, id, value, ...rest }) {
  const arrCliente = useSelector((state) => state.clienteReducer.arrCliente);

  const [valor, setValor] = React.useState(
    arrCliente.find((cliente) => cliente.codigo === value) || null
  );

  React.useEffect(() => {
    value === null && setValor(null);
  }, [value]);

  const props = {
    id: id,
    value: valor,
    options: arrCliente,
    getOptionLabel: (option) => option.codigo,
    filterOptions: (options, state) => {
      return options.filter(
        (option) =>
          option.codigo
            .toLowerCase()
            .includes(state.inputValue.toLowerCase()) ||
          option.nombre.toLowerCase().includes(state.inputValue.toLowerCase())
      );
    },
    renderOption: (option) => option.codigo + " - " + option.nombre,
    onChange: (obj, newValue) => {
      onChange(newValue);
      setValor(newValue);
    },
  };

  return (
    <Autocomplete
      autoHighlight
      renderInput={(params) => (
        <TextField
          required
          fullWidth
          variant="outlined"
          {...params}
          {...rest}
        />
      )}
      {...props}
    />
  );
}
