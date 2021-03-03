import React from 'react';
import smallLogo from './../../resorces/icons/service1.png'
const OrderBox = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="order-box">
                <div className="row d-flex justify-content-between my-4">
                    <div className="icon">
                        <img src={smallLogo} alt="" />
                    </div>
                    <div>
                        <button className="btn btn-brand">Pending</button>
                    </div>
                </div>
                <div>
                    <h6>{data.catagory}</h6>
                    <p>{data.details}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderBox;