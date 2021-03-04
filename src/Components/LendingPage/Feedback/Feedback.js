import React, { useEffect, useState } from 'react';
import Review from './Review';
import people1 from './../../../resorces/customer-1.png'
const Feedback = () => {

    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('https://creative-agency-jobayer.herokuapp.com/allreview')
        .then(res => res.json())
        .then(data => setReview(data))
    },[]);

    return (
        <div className="container">
            <h2 className="text-center my-5">Clients <span className="text-marking">Feedback</span></h2>
            <div className="row my-5">
                {
                    review.map(review => <Review key={review._id} img={people1} data={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Feedback;