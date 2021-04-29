import { Paper, Typography } from '@material-ui/core';
import {React, useState} from 'react';
import './Messages.css';
import Messager from './messaging/Messaging';
import contacts from './contactData';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

function Messages() {
    const [searchTerm, setSearchTerm] = useState('')

    const useStyles = makeStyles({
        root: {
            marginTop: "0px",
        },
        profile_container: {
            borderRadius: "0px",
            position: "absolute",
            marginTop: "0px",
            width: "100%",
            boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%);"
        }
    })

    const classes = useStyles();

    return (
        <div>
            <h1 className="nav-title">Messages</h1> 
                <div>
                <input type="text" 
                className="search"
                placeholder="Search..."
                onChange={event => {setSearchTerm(event.target.value)}}/>
                    <Paper className={classes.profile_container}>
                        <Grid>
                        {Object.values(contacts).map((contact, idx) => (
                        <Grid item key={idx}>
                            <Messager contact={contact}/>
                        </Grid>
                        ))}
                    </Grid>
                </Paper>
                </div>
        </div>
    )
}

export default Messages
