import { faCommentDots, faList, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../resorces/logos/logo.png'
import './Dashbord.css'
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <br/><br/><br/>
            <div className="side-menu">
                <ul>
                    <li><Link className="link" to='/dashbord/order'><FontAwesomeIcon icon={faShoppingCart}/> Order</Link></li>
                    <li><Link className="link" to='/dashbord/service'><FontAwesomeIcon icon={faList}/> Service List</Link></li>
                    <li><Link className="link" to='/dashbord/review'><FontAwesomeIcon icon={faCommentDots}/> Review</Link></li>

                    <li><Link className="link" to='/dashbord/allservice'><FontAwesomeIcon icon={faList}/> Service List</Link></li>
                    <li><Link className="link" to='/dashbord/addservice'><FontAwesomeIcon icon={faPlus}/> Add Service</Link></li>
                    <li><Link className="link" to='/dashbord/addadmin'><FontAwesomeIcon icon={faUserPlus}/> Make Admin</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;