import { makeStyles } from "@material-ui/core";

export const useStylesDesktop = makeStyles(() => ({
  desktopDrawer: {
    width: "256px",
    top: "64px !important",
    height: "calc(100% - 64px)  !important",
  },
}));
export const useStylesMobile = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
}));

export const useStylesNavContent = makeStyles(() => ({
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));
