import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import FooterBar from './components/Footer/FooterBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './pages/Post/Post';
import Profile from './pages/Profile/Profile';
import Listings from'./pages/Listings/Listings';
import NewMessages from'./pages/Messages/NewMessages';
import NewMessager from './pages/Messages/NewMessager';
import Comments from './pages/Comments/Comments';

function App() {
  //Note, I saw you hard-coded the user to be Post Malone, so I followed suit here. In real life you'd pull this out of a session cookie, and put it in session storage here.
  sessionStorage.setItem('username', 'Post');
  sessionStorage.setItem('userAvatarLink', 'PostMalone.jpeg');
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/products/:id" exact component={Comments}/>
      <Route path="/post" component={Post}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/listings" component={Listings}/>
      <Route path="/Messages" component={NewMessages}/>
      <Route path="/Messager/:id" exact component={NewMessager}/>
    </Switch>
    </Router>
    <FooterBar />
    </>
  );
}

export default App;
