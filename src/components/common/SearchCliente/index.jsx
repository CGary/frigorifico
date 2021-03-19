import * as React from "react";
import { Autocomplete } from "@material-ui/lab";

export default function SearchCliente({ children }) {
  return (
    <Autocomplete
      id="combo-box-cliente"
      options={[]}
      getOptionLabel={(option) => option.title}
      renderInput={children}
    />
  );
}
