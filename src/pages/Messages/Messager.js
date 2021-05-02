import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from '@material-ui/core';
import './ForMessager.css';
import contactDataDefault from './contactData';
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
        const userAvatar = sessionStorage.getItem('userAvatarLink');
        const [messageText, setMessageText] = useState("");
        const [ contactData, setContactData ] = useState(null);

        useEffect(()=>{
            let contactDataLS = JSON.parse(localStorage.getItem('contactData'))
            if(contactDataLS === null){
                contactDataLS = contactDataDefault;
                console.log("contactDataLS");
                console.log(contactDataLS)
                localStorage.setItem('contactData', JSON.stringify(contactDataLS));
            }
            setContactData(contactDataLS);
        },[])

        const onMessageTextChange = (e)=>{
            setMessageText(e.target.value);
        }

        const classes = useStyles();

        function handleSubmit(event) {
            event.preventDefault();
        }

        function onButtonClick(){
            let newMessageObject = { id: contactData[id].messages.length, isYou: true, name: 'You', message: messageText, image_src: userAvatar, timestamp : Date.now()}
            let newContactEntry = {...contactData[id], messages: [...contactData[id].messages, newMessageObject]};
            let newContactData = {...contactData, [id] : newContactEntry};
            localStorage.setItem('contactData', JSON.stringify(newContactData));
            setContactData(newContactData);
        }

        let messages = [];
        console.log("CONTACT DATA")
        console.log(contactData)
        if(contactData === null || !Object.keys(contactData).includes(id)){
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
                    onChange={onMessageTextChange}
                    required >
                    </input>
                    <IconButton onClick={onButtonClick} className="arrow" >
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