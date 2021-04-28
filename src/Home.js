import React from 'react';
// import * as BiIcons from 'react-icons/bi';
// import {Link} from 'react-router-dom';
import Products from './pages/Products/Products';

function Home() {
    return (
        <div className="home">
            <h1 className="nav-title">Marketplace</h1>
            <Products/>
        </div>
    )
}

export default Home
