import * as React from "react";
import { MdKeyboardArrowDown, MdSettings } from "react-icons/md";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ContainerConfig } from "./styles";

export default function Opcion() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ContainerConfig>
      <Button
        onClick={handleClick}
        size="large"
        startIcon={<MdSettings size="28px" />}
        endIcon={<MdKeyboardArrowDown size="28px" />}
      />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </ContainerConfig>
  );
}
