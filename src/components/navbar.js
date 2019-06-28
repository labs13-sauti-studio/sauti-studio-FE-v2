import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/">Sauti Studio</Link>
        </Typography>
        <Link to="/login">
          <Button color="primary">Profile</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
