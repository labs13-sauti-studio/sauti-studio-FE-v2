import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = ({ loggedIn }) => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/">Sauti Studio</Link>
        </Typography>
        {!loggedIn ? (
          <Link to="/login">
            <Button color="primary">Login</Button>
          </Link>
        ) : (
          <Link to="/profile">
            <Button color="primary">Profile</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}

export default Navbar
