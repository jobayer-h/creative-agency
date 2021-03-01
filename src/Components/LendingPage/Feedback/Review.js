import React from 'react';

const Review = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="service-box text-center">
                <img src={data.img} alt=""/>
                <h3>{data.name}</h3>
                <p>{data.comment}</p>
            </div>
        </div>
    );
};

export default Review;