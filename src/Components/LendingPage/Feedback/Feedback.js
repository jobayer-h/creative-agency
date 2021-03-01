import React from 'react';
import Review from './Review';
import people1 from './../../../resorces/customer-1.png'
import people2 from './../../../resorces/customer-2.png'
import people3 from './../../../resorces/customer-3.png'
const Feedback = () => {

    const reviewData = [
        {
            name: 'Nash Patrik',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            img: people1
        },{
            name: 'Miriam Barron',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.',
            img: people2
        },{
            name: 'Bria Malone',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
            img: people3
        }
    ];


    return (
        <div className="container">
            <h2 className="text-center my-5">Clients <span className="text-marking">Feedback</span></h2>
            <div className="row my-5">
                {
                    reviewData.map(review => <Review data={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Feedback;