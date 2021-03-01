import React from 'react';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import BrandLogo from './Hero/BrandLogo';
import Hero from './Hero/Hero';
import './Lending.css'
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';
const Lending = () => {
    return (
        <div>
            <Hero></Hero>
            <section id="shape"></section>
            <br/>
            <BrandLogo />
            <br/><br/>
            <Services />
            <Portfolio />
            <br/>
            <Feedback />
            <br/>
            <Footer />
        </div>
    );
};

export default Lending;