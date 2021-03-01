import React from 'react';
import './Service.css';
const ServiceBox = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="service-box text-center">
                <img src={data.img} alt=""/>
                <h3>{data.name}</h3>
                <p>{data.text}</p>
            </div>
        </div>
    );
};

export default ServiceBox;