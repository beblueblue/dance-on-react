import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  bone: {
    marginTop: theme.spacing(8),
  }
}))

function Bone() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.bone}>
      <Grid item xs={9}>
        <main>main</main>
      </Grid>
      <Grid item xs={3}>
        <nav>nav</nav>
      </Grid>
    </Grid>
  )
}

export default Bone