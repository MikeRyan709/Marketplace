import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const Messager = ({contact}) => {

    const useStyles = makeStyles({
        root: {
            textDecoration: "none",
            color: "black",
        },
        name: {
            fontWeight: "bold"
        },
        lastMessage: {
            marginTop: "5px",
            color: "gray",
            fontSize: "15px"
        },
        profile_pic: {
            borderRadius: "50%",
            position: "absolute",
            width: "50px",
            marginLeft: "-60px",
        }
    })

    const classes = useStyles();

    return (
            <Paper className="profile_container">
                <Link to={`./Messager/${contact.id}`} className={classes.root} onClick={() => localStorage.setItem("Messenger Name", contact.name)}>
                    <img className={classes.profile_pic} src={contact.image_src} alt="profile"></img>
                    <Typography className={classes.name}>
                        {contact.name}
                    </Typography>
                    <Typography className={classes.lastMessage}>
                        {contact.messages && contact.messages.length > 0 ? contact.messages[contact.messages.length-1].message : null}
                    </Typography>
                </Link>
            </Paper>
    )
}

export default Messager