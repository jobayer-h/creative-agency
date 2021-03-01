import React from 'react';

const Footer = () => {
    return (
        <div className="y-bg">
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <input class="form-control" type="email" placeholder="Email" name="email" id=""/>
                            <br/>
                            <input class="form-control" type="text" name="name" placeholder="Name / Company Name" id=""/>
                            <br/>
                            <textarea class="form-control" name="message" id="" placeholder="Your Message" cols="30" rows="10"></textarea>
                            <br/>
                            <input className="btn btn-brand" type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
                <br/><br/><br/>
                <p className="text-center">copyright Jobayer H. 2021</p>
            </div>
        </div>
    );
};

export default Footer;