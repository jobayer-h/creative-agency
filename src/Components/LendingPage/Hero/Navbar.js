import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../resorces/logos/logo.png'
const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to='/' >
                    <img class="main-logo" src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mx-4">
                            <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link class="nav-link" to='/'>Our Portfolio</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link class="nav-link" to='/'>Our Team</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link class="nav-link" to='/'>Contact Us</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <button className="btn btn-brand"><Link class="login-btn" to='/login'>Login</Link></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default navbar;