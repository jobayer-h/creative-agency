import React from 'react';
import ServiceBox from './ServiceBox';
import serviceImg1 from './../../../resorces/icons/service1.png'
import serviceImg2 from './../../../resorces/icons/service2.png'
import serviceImg3 from './../../../resorces/icons/service3.png'
const Services = () => {

    const serviceData = [
        {
            name: 'Web & Mobile design',
            text: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img: serviceImg1
        },{
            name: 'Graphic design',
            text: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            img: serviceImg2
        },{
            name: 'Web development',
            text: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            img: serviceImg3
        }
    ];

    return (
        <div className="container">
            <h2 className="text-center my-5">Provide awesome <span className="text-marking">services</span></h2>
            <div className="row my-5">
                {
                    serviceData.map(service => <ServiceBox data={service}></ServiceBox>)
                }
            </div>
        </div>
    );
};

export default Services;