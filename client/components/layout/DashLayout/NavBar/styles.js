import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: "256px",
    top: "64px !important",
    height: "calc(100% - 64px)  !important",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));
