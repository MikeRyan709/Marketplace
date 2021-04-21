import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "./Navbar.css";
import { IconContext } from 'react-icons'
import { Badge, IconButton } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import useStyles from './styles'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    const classes = useStyles();
    return (
        <>
        <IconContext.Provider value={ {color: '#fff' }}>
           <div className="navbar">
               <Link to="#" className="menu-bars">
                   <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
               <IconButton aria-label="Show cart items" color="inherit" className={classes.cart}>
                    <Badge badgeContent={5} color="secondary" className="shopping-cart">
                        <ShoppingCart/>
                    </Badge>
               </IconButton>
           </div>
           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className="nav-menu-items" onClick={showSidebar}>
                   <li className="navbar-toggle">
                       <Link to="#" className="menu-bars">
                           <AiIcons.AiOutlineClose/>
                       </Link>
                   </li>
                   {SidebarData.map((item, index) => {
                       return (
                           <li key={index} className={item.cName}>
                               <Link to={item.path}>
                                   {item.icon}
                                   <span className="item-title">{item.title}</span> 
                               </Link>
                           </li>
                       )
                   })}
               </ul>
           </nav>
           </IconContext.Provider>
        </>
    )
}

export default Navbar
