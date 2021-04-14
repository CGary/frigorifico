import React from "react";
import { ListItem } from "./styles";
import { NavLink as RouterLink } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

const useStyelesNavItem = makeStyles((theme) => ({
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "10px 8px",
    textTransform: "none",
    width: "100%",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

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
