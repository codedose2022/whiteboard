import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  branding:{
    '& img':{
      width: '3.5rem',
    }
  },
  flexToolBar:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  navBarRight:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  hoverIcon:{
    cursor: 'pointer',
  }
}));
