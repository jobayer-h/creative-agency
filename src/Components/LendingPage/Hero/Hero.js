import React from 'react';
import Navbar from './Navbar';
import heroimg from './../../../resorces/logos/Frame.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="y-bg">
            <div className="container">
                <Navbar></Navbar>

                <section className="row">
                    <div className="col-md-5">
                        <h1>Let’s Grow Your<br />
                    Brand To The<br />
                    Next Level</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <Link to="/dashbord/order" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-brand">Hire Us</button>
                        </Link>
                    </div>
                    <div className="col-md-7">
                        <img className="img-fluid" src={heroimg} alt="" />
                    </div>
                </section>


            </div>

        </div>

    );
};

export default Hero;