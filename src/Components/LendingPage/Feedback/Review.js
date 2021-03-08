import React from 'react';

const Review = ({ data, img }) => {
    return (
        <div className="col-md-4">
            <div className="service-box text-center">
                <img src={img} alt="" />
                <h3>{data.username}</h3>
                <small className="text-marking">{data.company}</small>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default Review;