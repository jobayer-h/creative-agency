import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderBox from './OrderBox';

const OrderItem = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext);
    const [myOrder, setMyOrders] = useState([])
console.log(logedInUser);
    useEffect(() => {
        fetch('https://creative-agency-jobayer.herokuapp.com/allorders?email='+logedInUser.email)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[])
    
    return (
        <div>
            <div className="row">
                {
                myOrder.map(order => <OrderBox data={order} />)
            }
            </div>
            
        </div>
    );
};

export default OrderItem;