import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  addBtn: {
    display: "flex",
    justifyContent: "flex-end",
    "& .MuiButton-startIcon": {
      marginRight: "0",
    },
    "& button": {
      minWidth: "2rem",
      borderRadius: 100,
    },
  },
  fab: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 999,
  },
  error: {
    fontSize: "12px",
    color: "#ea1000",
  },
  formControl: {
    [theme.breakpoints.up("md")]: {
      padding: ".25rem 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: ".25rem",
    },
    "& .MuiTypography-body1": {
      fontSize: ".875rem",
    },
  },
  formikShrinkLabel: {
    [theme.breakpoints.up("md")]: {
      margin: "-.75rem 0",
    },
    [theme.breakpoints.down("md")]: {
      margin: "-.35rem .25rem",
    },
  },
  shrinkLabel: {
    marginTop: "1rem",
  },
  styledCell: {
    position: "relative",
    "& .super-app.negative": {
      // backgroundColor: theme.palette.error.main,
      color: theme.palette.error.main,
      textAlign: "center",
    },
    "& .super-app.positive": {
      // backgroundColor: theme.palette.success.main,
      color: theme.palette.success.main,
      textAlign: "center",
    },
    "& .whiteboard--actions": {
      textAlign: "center",
    },
  },
  absoluteBtn: {
    position: "absolute",
    right: "-9.25rem",
    "& .MuiSvgIcon-root": {
      fontSize: "1.25rem",
    },
    "& button": {
      margin: "0 .5rem",
    },
  },
  edit: {
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  delete: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
}));
