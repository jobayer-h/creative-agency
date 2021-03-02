import { faCommentDots, faList, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../resorces/logos/logo.png'
import './Dashbord.css'
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-logo">
                <img src={logo} alt=""/>
            </div>
            <br/><br/><br/>
            <div className="side-menu">
                <ul>
                    <li><Link className="link" to='https://www.google.com/'><FontAwesomeIcon icon={faShoppingCart}/> Order</Link></li>
                    <li><Link className="link" to='https://www.google.com/'><FontAwesomeIcon icon={faList}/> Service List</Link></li>
                    <li><Link className="link" to='https://www.google.com/'><FontAwesomeIcon icon={faCommentDots}/> Review</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;