import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const SPAppBar = (props) => {
  const { classes } = props;
  return <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        Science Planner
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)(SPAppBar)