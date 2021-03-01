import React from 'react';
import airbnb from './../../../resorces/logos/airbnb.png'
import google from './../../../resorces/logos/google.png'
import netflix from './../../../resorces/logos/netflix.png'
import slack from './../../../resorces/logos/slack.png'
import uber from './../../../resorces/logos/uber.png'
const BrandLogo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-2">
                    <img className="company-logo" src={google} alt="" />
                </div>
                <div className="col-md-2 col-sm-2">
                    <img className="company-logo" src={uber} alt="" />
                </div>
                <div className="col-md-2 col-sm-2">
                    <img className="company-logo" src={airbnb} alt="" />
                </div>
                <div className="col-md-2 col-sm-2">
                    <img className="company-logo" src={netflix} alt="" />
                </div>
                <div className="col-md-2 col-sm-2">
                    <img className="company-logo" src={slack} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;