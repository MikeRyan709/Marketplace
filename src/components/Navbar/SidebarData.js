import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
    {
        title: 'Marketplace',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FiIcons.FiMessageSquare/>,
        cName: 'nav-text'
    },
    {
        title: 'Your Listings',
        path: '/listings',
        icon: <FaIcons.FaCashRegister/>,
        cName: 'nav-text'
    },
    {
        title: 'Post a Product',
        path: '/post',
        icon: <FiIcons.FiPlus/>,
        cName: 'nav-text'
    },
]
