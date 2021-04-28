import React from 'react';
import './Comments.css';
import { Container, Card, Typography, CardHeader, CardContent, Avatar } from '@material-ui/core';
import Footer from './components/FooterBar';
import useStyles from './styles';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import { useParams, Link } from 'react-router-dom';
import comments from './data/commentData'

function Comments() {
  const classes = useStyles();
  const params = useParams();
  const id = params.id;

  // let comments = JSON.parse(localStorage.getItem('comments')) || {}
  let commentData = { id : null, username : null, title: null, body : null,  comments : []};
  let comment_id_found = Object.keys(comments).includes(id)

  if(comment_id_found){
    commentData = comments[id];
  }else{
    return (<div>
      <Typography color="error">Error, comments could not be loaded, please try again!</Typography>
      <Link to="/"><Typography>Go back to the previous page.</Typography></Link>
    </div>);
  }

  console.log(commentData);


  //page layout code

  console.log("REPLIES")
  let replyHtml = [];
  for(let i = 0; i < commentData.comments.length; i++){
    let reply = commentData.comments[i];
    replyHtml.push(
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="user" className={classes.avatar}>
            {reply.username[0]}
          </Avatar>
        }
        title={reply.username}
        subheader={reply.date}
      />
      <CardContent>
        <Typography color="black"
        gutterBottom 
        fontSize="14" 
        align="left"
      >{reply.message}</Typography>
    </CardContent>
    </Card>)
  }

  return (

    //nav header, item container, comment containers  
    <Container>
      <div className="comment_header">
        <h1 className="nav-title">Comment</h1>
    </div><br/>

  
      <div className="post_container">
        <Typography variant="head"
        className={classes.head}>{commentData.title}</Typography>
        <hr />
        <div className="item_container">
          <Typography variant="item_text"
          gutterBottom
          className={classes.itemText}>
            {commentData.body}
          </Typography>
          
        </div>
        <SmsOutlinedIcon className={classes.commentIcon}/>
      </div>

      <div>
        {replyHtml}
      </div>

      <Footer />
    </Container>
    
  );
}

export default Comments;