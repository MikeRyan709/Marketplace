import React from 'react'
import { Paper,  Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {

      '& > *': {
        margin: theme.spacing(2),
        width: theme.spacing(20),
        height: theme.spacing(10),
      },

    },
  }));
function AccInfo() {
    const classes = useStyles();
    return (
        <Paper elevation={6} className={classes.root}>
        <Typography variant="h7">First Name: Post </Typography>
        <Typography variant="h7">Last Name: Malone</Typography>
        <Typography variant="h7">Email: WhiteIverson@Gmail.com</Typography>
        <Typography variant="h7">Student ID: 1234-5678-90</Typography>
        </Paper>

    )
}
export default AccInfo