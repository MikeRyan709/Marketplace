import { Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from '@material-ui/core';
import './ForMessager.css';
import contactData from './contactData';
import YouMessage from './messaging/Messagersyou';
import ThemMessage from './messaging/Messagersppl';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Form } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


function PplMessager() {

        const useStyles = makeStyles({
            root: {
                textDecoration: "none",
                color: "black",
            },

            messager_container: {
                marginTop: "100px"
            },
            nav_title: {
                display: "flex",
                position: "fixed",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "white",
                marginTop: "-107px",
                width: "250px",
                left: "50%",
                transform: "translate(-50%, 50%)",
                textShadow: "0px 3px 5px rgba(0,0,0,0.13)",
                zIndex: "1001"
            }
        })

        const params = useParams();
        const id = params.id;

        const classes = useStyles();
        const now = new Date().getTime();

        function handleSubmit(event) {
            event.preventDefault();
        }

        let messages = [];

        if(!Object.keys(contactData).includes(id)){
            return <div style={{paddingTop:"100px"}}>
                <Typography color="error">Messages could not be loaded!</Typography>
                <Link to="/messages"><Typography>Click to return to messages.</Typography></Link>
            </div>
        }else{
            messages = contactData[id].messages;
        }

        return(
            <div className="messager">
                <h1 className={classes.nav_title}>{localStorage.getItem("Messenger Name")}</h1>
                    <Paper className={classes.messager_container}>
                        <Grid>
                            {messages.map((message, idx) => {
                                    if(message.isYou){   
                                        return (<Grid item key={idx}>
                                            <YouMessage messageData={message} />
                                        </Grid>)
                                    }else{
                                        return (<Grid item key={idx}>
                                            <ThemMessage messageData={message} />
                                        </Grid>)
                                    }
                                })}
                        </Grid>
                    </Paper>

                <Form className="input_msg" onSubmit={handleSubmit}>
                    <input 
                    className="msg_bigger"
                    type='text'
                    placeholder="Text Message"
                    required >
                    </input>
                    <IconButton className="arrow" >
                        <ArrowUpwardIcon
                        className="arrow_color"
                        fontSize="large"
                        onClick="">
                        </ArrowUpwardIcon>
                    </IconButton>
                </Form>
            </div>
        )
}

export default PplMessager