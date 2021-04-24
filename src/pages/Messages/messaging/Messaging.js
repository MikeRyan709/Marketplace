import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const Messager = ({profiles}) => {

    const useStyles = makeStyles({
        root: {
            textDecoration: "none",
            color: "black",
        },
        name: {
            fontWeight: "bold",
            marginLeft: "10px",
        },
        lastMessage: {
            marginTop: "5px",
            marginLeft: "10px",
            color: "gray",
            fontSize: "15px"
        },
        profile_pic: {
            borderRadius: "50%",
            position: "absolute",
            width: "50px",
            marginLeft: "-50px",
        }
    })

    const classes = useStyles();

    return (
            <Paper className="messages-container">
                <Link to={`./Messager/${profiles.id}`} className={classes.root} onClick={() => localStorage.setItem("Messenger Name", profiles.name)}>
                    <img className={classes.profile_pic} src={profiles.image_src} alt="profile"></img>
                    <Typography className={classes.name}>
                        {profiles.name}
                    </Typography>
                    <Typography className={classes.lastMessage}>
                        {profiles.message}
                    </Typography>
                </Link>
            </Paper>
    )
}

export default Messager