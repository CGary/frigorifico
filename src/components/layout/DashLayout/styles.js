import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      backgroundColor: "#F4F6F8",
    },
    wrapper: {
      height: "100%",
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
      [theme.breakpoints.up("md")]: {
        paddingLeft: 256,
      },
    },
    contentContainer: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
    },
    content: {
      flex: "1 1 auto",
      height: "100%",
      overflow: "auto",
    },
  };
});
