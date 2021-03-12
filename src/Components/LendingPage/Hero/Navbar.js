import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../resorces/logos/logo.png'
import { Twirl as Hamburger } from 'hamburger-react'
import { userContext } from '../../../App';
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const handleLogOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('email');
        alert('Log Outt Success');
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to='/' >
                    <img class="main-logo" src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mx-4">
                            <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item mx-4">
                            <a class="nav-link" href="#portfolio">Our Portfolio</a>
                        </li>
                        <li class="nav-item mx-4">
                            {
                                loggedInUser.email || sessionStorage.getItem('user')?
                                <Link class="nav-link" to='/dashbord/order'>Dashboard</Link>:
                                <Link class="nav-link" to='/'>Our Team</Link>
                            }
                        </li>
                        <li class="nav-item mx-4">
                            <a class="nav-link" href="#contact">Contact Us</a>
                        </li>
                        <li class="nav-item mx-4">
                            {
                                loggedInUser.email || sessionStorage.getItem('user')?
                                <button className="btn btn-brand"><Link onClick={handleLogOut} class="login-btn">Log Out</Link></button>
                                :
                                <button className="btn btn-brand"><Link class="login-btn" to='/login'>Log In</Link></button>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;