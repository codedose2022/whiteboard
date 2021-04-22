import React from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  withStyles,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./MainNavBarStyles";
import logo from "../../../images/logo.png";

import AddIcon from "@material-ui/icons/Add";

function MainNavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElm, setAnchorElm] = React.useState(null);

  const handleAvatarMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };
  const handleBtnMenu = (event) => {
    setAnchorElm(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClosebtnMenu = () => {
    setAnchorElm(null);
  };

  const StyledMenu = withStyles({
    paper: {
      minWidth: "200px",
      marginTop: ".25rem",
    },
  })((props) => (
    <Menu
      elevation={1}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent">
        <Toolbar className={classes.flexToolBar}>
          <div className={classes.branding} edge="start">
            <img src={logo} alt="branding" />
          </div>

          <div className={classes.navBarRight}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              size="small"
              onClick={handleBtnMenu}
            >
              Add new
            </Button>
            <StyledMenu
              anchorEl={anchorElm}
              open={Boolean(anchorElm)}
              onClose={handleClosebtnMenu}
            >
              <MenuItem onClick={handleClosebtnMenu}>User</MenuItem>
              <Divider />
              <MenuItem onClick={handleClosebtnMenu}>Project</MenuItem>
            </StyledMenu>


            <Avatar onClick={handleAvatarMenu} className={classes.hoverIcon}>M</Avatar>
            <StyledMenu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </StyledMenu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainNavBar;
