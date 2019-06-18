import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import GoogleLoginButton from 'src/images/google-login-button.png'
import FacebookLoginButton from 'src/images/facebook-login-button.png'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

function LoginModal() {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Typography gutterBottom>Click to get the full Modal experience!</Typography>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Sauti Studio
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
          <a href={`${process.env.GATSBY_API_URL}/auth/google`}>
        <img src={GoogleLoginButton} alt="" />
      </a>

      <a href={`${process.env.GATSBY_API_URL}/auth/facebook`}>
        <img src={FacebookLoginButton} alt="" />
      </a>
          </Typography>
          <LoginModal />
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;