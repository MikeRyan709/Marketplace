import React from 'react';
import {useState} from 'react';

function MakePost(props){
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
  
    const onButtonClick = ()=>{
      let post = {
        "name" : name,
        "message": message
      }
      props.addNewPost(post);
    }
  
  
    return (<form>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" />
      <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="message" />
      <button onClick={onButtonClick} type="button">Post</button>
    </form>);
  }

  export default MakePost;