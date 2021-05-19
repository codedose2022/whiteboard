import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
  DialogContentText,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import useStyles from "./ModalPopStyles";
import Alert from "@material-ui/lab/Alert";

const ModalPop = ({
  isOpen,
  handleClose,
  width,
  title,
  content,
  errorMessage,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      // maxWidth={width}
      disableBackdropClick
    >
      <DialogTitle id="alert-dialog-slide-title" className={classes.modalTitle}>
        {title}
        <IconButton color="secondary" size="small" onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-content" component="div">
          {errorMessage && <Alert severity="error"> {errorMessage} </Alert>}
          {content}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ModalPop;
