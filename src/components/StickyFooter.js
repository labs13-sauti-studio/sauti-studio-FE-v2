import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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
      <Toolbar></Toolbar>
    </AppBar>
  )
}

export default Navbar
