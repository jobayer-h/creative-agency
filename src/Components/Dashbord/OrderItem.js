import React, { useEffect, useState } from 'react';
import OrderBox from './OrderBox';

const OrderItem = () => {

    const [myOrder, setMyOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/allorders')
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