import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import {
  // FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    maxWidth: '300px',
    width: '100%',
    backgroundColor: 'black',
    boxShadow: theme.shadows[10],
    padding: '40px 20px',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
    color: 'white',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: '20px',
  },
  icons: {
    display: 'block',
    width: 20,
    color: 'gray',
    cursor: 'pointer',
    '&:hover': { color: '#2699FB' },
  },
}))

function LoginModal() {
  const [open, setOpen] = React.useState(true)
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)

  // const handleOpen = () => {
  //     setOpen(true);
  // };

  // const handleClose = () => {
  //     setOpen(false);
  // };
  const classes = useStyles()

  return (
    <div style={pageStyle}>
      {/* <Button onClick={handleOpen}>Open Modal</Button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        // onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Sauti Studio
          </Typography>
          <GoogleLoginButton
            style={loginButtonStyle}
            onClick={() =>
              (window.location.href = `${process.env.REACT_APP_BE_API_URL}/auth/google`)
            }
          />
          {/* <FacebookLoginButton
            onClick={() =>
              (window.location.href = `${process.env.BE_API_URL}/auth/facebook`)
            }
          /> */}

          {/*  */}
        </div>
      </Modal>
    </div>
  )
}

const loginButtonStyle = {
  width: '90%',
}

const pageStyle = {
  background: 'black',
}

export default LoginModal

{
  /* <Typography variant="subtitle1" id="simple-modal-description">
            <a href={`${process.env.GATSBY_API_URL}/auth/google`}>
              <img src={GoogleLoginButton} alt="" />
            </a>
            <a href={`${process.env.GATSBY_API_URL}/auth/facebook`}>
              <img src={FacebookLoginButton} alt="" />
            </a>{' '}
          </Typography> */
}
