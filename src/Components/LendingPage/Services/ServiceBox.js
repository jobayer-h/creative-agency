import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const ServiceBox = ({ data }) => {
    return (
        <div className="col-md-4">
            <Link to="/dashbord/order" style={{ textDecoration: 'none' }}>
                <div className="service-box text-center">
                    <img src={data.img} alt="" />
                    <h3>{data.name}</h3>
                    <p>{data.text}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceBox;