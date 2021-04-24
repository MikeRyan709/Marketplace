import './App.css';
import Navbar from './components/Navbar/Navbar';
import FooterBar from './components/Footer/FooterBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './pages/Post/Post';
import Profile from './pages/Profile/Profile';
import Listings from'./pages/Listings/Listings';
import Messages from'./pages/Messages/Messages';
import Messager from './pages/Messages/Messager';
import Comments from './pages/Comments/Comments';

function App() {
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
      <Route path="/Messages" component={Messages}/>
      <Route path="/Messager/:id" exact component={Messager}/>
    </Switch>
    <FooterBar />
    </Router>
      
    </>
  );
}

export default App;
