import React from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_4o7d5ay', 'template_gonw7ag', e.target, 'user_Zs2bMecKtP9m88IjMAhBI')
          .then((result) => {
              alert('Success!')
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <div className="y-bg" id="contact">
            <br /><br />
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="linear" className="col-md-6">
                        <h1>Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-easing="linear" className="col-md-6">
                        <form onSubmit={sendEmail} action="">
                            <input class="form-control" type="email" placeholder="Email" name="email" id="" />
                            <br />
                            <input class="form-control" type="text" name="name" placeholder="Name / Company Name" id="" />
                            <br />
                            <textarea class="form-control" name="message" id="" placeholder="Your Message" cols="30" rows="10"></textarea>
                            <br />
                            <input className="btn btn-brand" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
                <br /><br /><br />
                <p className="text-center mb-0">copyright Jobayer H. 2021</p>
            </div>
        </div>
    );
};

export default Footer;