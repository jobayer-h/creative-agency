import React, { useEffect, useState } from 'react';
import ServiceBox from './ServiceBox';
import serviceImg1 from './../../../resorces/icons/service1.png'
import serviceImg2 from './../../../resorces/icons/service2.png'
import serviceImg3 from './../../../resorces/icons/service3.png'
const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://creative-agency-jobayer.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="1500"
            data-aos-easing="linear" className="container">
            <h2 className="text-center my-5">Provide awesome <span className="text-marking">services</span></h2>
            <div className="row my-5">
                {
                    service.map(service => <ServiceBox img={serviceImg1} key={service._id} data={service}></ServiceBox>)
                }
            </div>
        </div>
    );
};

export default Services;