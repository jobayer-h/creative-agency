import React from 'react';
import airbnb from './../../../resorces/logos/airbnb.png'
import google from './../../../resorces/logos/google.png'
import netflix from './../../../resorces/logos/netflix.png'
import slack from './../../../resorces/logos/slack.png'
import uber from './../../../resorces/logos/uber.png'
const BrandLogo = () => {
    return (
        <div data-aos-duration="2000" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className="container d-flex justify-content-between">
            <div className="brand-container">
                <img src={slack} alt="" />
            </div>
            <div className="brand-container">
                <img src={netflix} alt="" />
            </div>

            <div className="brand-container">
                <img src={uber} alt="" />
            </div>
            <div className="brand-container">
                <img src={google} alt="" />
            </div>
            <div className="brand-container">
                <img src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default BrandLogo;