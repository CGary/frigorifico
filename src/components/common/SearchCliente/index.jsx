import * as React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function SearchCliente({ onChange, id, value, ...rest }) {
  const { arrCliente } = useSelector((state) => state.clienteReducer);
  const [valor, setValor] = React.useState(
    arrCliente.find((cliente) => cliente.codigo === value) || null
  );
  React.useEffect(() => {
    value === null && setValor(null);
  }, [value]);

  return (
    <Autocomplete
      disableClearable
      autoHighlight
      id={id}
      options={arrCliente}
      getOptionLabel={(option) => option.codigo}
      filterOptions={(options, state) => {
        return options.filter(
          (option) =>
            option.codigo
              .toLowerCase()
              .includes(state.inputValue.toLowerCase()) ||
            option.nombre.toLowerCase().includes(state.inputValue.toLowerCase())
        );
      }}
      renderOption={(option) => option.codigo + " - " + option.nombre}
      renderInput={(params) => (
        <TextField
          {...params}
          {...rest}
          variant="outlined"
          required
          fullWidth
        />
      )}
      onChange={(obj, newValue) => {
        console.log(newValue);
        onChange(newValue);
        setValor(newValue);
      }}
      value={valor}
    />
  );
}
