import * as React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

export default function Search(props) {
  const {
    arrSource,
    onChange,
    id,
    valor,
    getOptionLabel,
    filterOptions,
    renderOption,
    ...rest
  } = props;

  const propsAutocomplete = {
    id: id,
    value: valor,
    options: arrSource,
    getOptionLabel,
    filterOptions,
    renderOption,
    onChange: (obj, newValue) => {
      onChange(newValue);
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
      {...propsAutocomplete}
    />
  );
}
