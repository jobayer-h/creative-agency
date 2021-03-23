import React, { useEffect, useState } from 'react';
import Review from './Review';
import userLogo from './../../../resorces/icons/user.svg'
import Spiner from '../Services/Spiner';
const Feedback = () => {

    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://dmediaworld.com/creative-agency/allreview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <div className="container">
            <h2 className="text-center my-5">Clients <span className="text-marking">Feedback</span></h2>
            <div className="row my-5">
                {
                    review.length > 0 ?
                        review.map(review => <Review key={review._id} img={userLogo} data={review}></Review>)
                        :
                        <Spiner />
                }
            </div>
        </div>
    );
};

export default Feedback;