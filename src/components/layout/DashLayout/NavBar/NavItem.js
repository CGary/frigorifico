import React from "react";
import { useStyelesNavItem, ListItem } from "./styles";
import { NavLink as RouterLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const NavItem = ({ href, icon: Icon, title }) => {
  const classes = useStyelesNavItem();

  return (
    <ListItem className={classes.item} disableGutters>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {Icon && <Icon size="28px" className={classes.icon} />}
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  );
};

export default NavItem;
