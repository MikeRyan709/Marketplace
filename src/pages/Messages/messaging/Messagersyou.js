import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const YouMessaging = ({messageData}) => {

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
        you_messages_pic: {
            borderRadius: "50%",
            position: "absolute",
            width: "40px",
            marginLeft: "-50px",
        },
    })
    
    const classes = useStyles();

    return (
        <Paper className="messages_container_second">
            <img className={classes.you_messages_pic} src={messageData.image_src} alt="profile"></img>
            <Typography className={classes.name}>
                {messageData.name}
            </Typography>
            <Typography className={classes.lastMessage}>
                {messageData.message}
            </Typography>
        </Paper>
    )
}

export default YouMessaging;