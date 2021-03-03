import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const ServiceBox = ({ data , img}) => {
    return (
        <div className="col-md-4">
            <Link to="/dashbord/order" style={{ textDecoration: 'none' }}>
                <div className="service-box text-center">
                    <img src={img} alt="" />
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceBox;