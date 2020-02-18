import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
  tooBar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}))

function Header() {
  const classes = styles();
  return (
    <AppBar position="absolute" >
      <Toolbar className={classes.tooBar}>
        头部 
      </Toolbar>
    </AppBar>
  )
}

export default Header