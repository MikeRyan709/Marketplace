import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    minWidth: 325,
    backgroundColor: "#4892bc",
    marginTop: "100px",
    color: "White",
  },
  media: {
    height: 120,
    width: 120,
    borderRadius: "50%"
},
    activity: {
        minWidth: 325,
        backgroundColor: "#4892bc",
        marginTop: "50px",
        color: "White",
        marginBottom: "100px",
    }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Card className={classes.root}>
        <CardContent>
          <CardMedia
            className={classes.media}
            image=" https://i.redd.it/bcuftjt3yhp41.jpg">
          </CardMedia>
          <Typography>First Name: Post</Typography>
          <Typography>LastName: Malone</Typography>
          <Typography>Email: Whiteiverson@Gmail.com</Typography>
          <Typography>Student ID: 1234-5678-90</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.activity}>
        <CardContent>
          <Typography>An item You listed has Sold!</Typography>
          <Typography>An item you listed has Sold!</Typography>
          <Typography>You recieved a new message!</Typography>
          <Typography>You recieved a new message!</Typography>
          <Typography>You recieved a new message!</Typography>
          <Typography>An item you listed has sold!</Typography>

        </CardContent>
      </Card>
    </Grid>
  );
}
