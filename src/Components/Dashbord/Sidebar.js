import { faCommentDots, faList, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from './../../resorces/logos/logo.png'
import './Dashbord.css'
const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [logedInUser, setLogedInUser] = useContext(userContext);
    useEffect(() => {
        fetch('https://dmediaworld.com/creative-agency/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    })





    return (
        <div>
            <div className="sidebar-logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <br /><br /><br />
            <div className="side-menu">
                <ul>

                    {
                        isAdmin ?
                            <div>
                                <li><Link className="link" to='/dashbord/allservice'><FontAwesomeIcon icon={faList} /> Service List</Link></li>
                                <li><Link className="link" to='/dashbord/addservice'><FontAwesomeIcon icon={faPlus} /> Add Service</Link></li>
                                <li><Link className="link" to='/dashbord/addadmin'><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link></li>
                            </div>
                            :
                            <div>
                                <li><Link className="link" to='/dashbord/order'><FontAwesomeIcon icon={faShoppingCart} /> Order</Link></li>
                                <li><Link className="link" to='/dashbord/service'><FontAwesomeIcon icon={faList} /> Service List</Link></li>
                                <li><Link className="link" to='/dashbord/review'><FontAwesomeIcon icon={faCommentDots} /> Review</Link></li>
                            </div>
                    }


                </ul>
            </div>
        </div>
    );
};

export default Sidebar;