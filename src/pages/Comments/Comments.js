import React, { useState, useEffect } from 'react';
import './Comments.css';
import { Container, Card, Typography, CardHeader, CardContent, Avatar, IconButton } from '@material-ui/core';
// import Footer from './components/FooterBar';
import useStyles from './styles';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import { useParams, Link } from 'react-router-dom';
import commentsDefault from './data/commentData';

function Comments() {
  const classes = useStyles();
  const params = useParams();
  const [ commentText, setCommentText ] = useState(''); 
  const [ commentData, setCommentData ] = useState(null); //{ id : null, username : null, title: null, body : null,  comments : []}
  const id = params.id;
  const username = sessionStorage.getItem('username');

  useEffect(()=>{
    let productLocal = JSON.parse(localStorage.getItem('productObject'));
    let products = JSON.parse(localStorage.getItem("products"));
    let productsData = products.concat(productLocal);

    let comments = JSON.parse(localStorage.getItem('comments'));
    if(comments === null){
      comments = commentsDefault
      localStorage.setItem('comments', JSON.stringify(comments));
    }
    let comment_id_found = Object.keys(comments).includes(id)

    const get_product = (products, searched_id) =>{
      for(let i =0; i < products.length; i++){
        if(products[i].id == searched_id){
          return products[i]
        }
      }
      return null;
    }

    let product = get_product(productsData, id);
    let product_found = product !== null;

    if(comment_id_found){
      setCommentData(comments[id]);
    }else if(product_found){
      //Product found, but no comment data yet. In real life this *probably* would be done at post creation time, but for the sake of time.
      let newCommentData = { id : product.id, username : username, title: product.name, body : product.description,  comments : []}
      localStorage.setItem('comments', JSON.stringify({...comments, [id] : newCommentData}));
      setCommentData(newCommentData);
    }else{
      setCommentData(null);
    }
  }, []);

  if(commentData === null){
    return (<div>
        <Typography color="error">Error, comments could not be loaded, please try again!</Typography>
        <Link to="/"><Typography>Go back to the previous page.</Typography></Link>
      </div>);
  }
  
  const onCommentInputChange = (e)=>{
    setCommentText(e.target.value);
  }

  const onAddCommentButtonClick = (e)=>{
    let newCommentData = {...commentData, comments: [...commentData.comments, {
      username: username,
      message: commentText
    }]}
    let comments = JSON.parse(localStorage.getItem('comments')) || commentsDefault;
    comments[id] = newCommentData;
    localStorage.setItem('comments', JSON.stringify(comments));
    setCommentData(newCommentData)
  }

  //page layout code

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
        <input className="comment_add" onChange={onCommentInputChange} type="text" placeholder="Add a comment"/>
        <IconButton onClick={onAddCommentButtonClick}><SmsOutlinedIcon className={classes.commentIcon}/></IconButton>
      </div>

      <div>
        {replyHtml}
      </div>

      {/* <Footer /> */}
    </Container>
    
  );
}

export default Comments;