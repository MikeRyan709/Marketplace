import React from 'react';
import { Card, CardMedia, CardContent, Grid, Typography, Paper } from '@material-ui/core';
 

function Posts(props){
    let posts = props.postData;
    let postsHtml = []
    for(let i = 0; i < posts.length; i++){
      let post = posts[i];
      postsHtml.push(<Card>
        <h3>{post.name}</h3>
        <p>{post.message}</p>
      </Card>)
    }
  
    return (
      <main>
        <h1>Comments:</h1>
        {postsHtml}
      </main>
    )
  }

export default Posts;
  