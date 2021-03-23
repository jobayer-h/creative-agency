import React, {useEffect, useState } from 'react';
import Spiner from '../LendingPage/Services/Spiner';
import OrderBox from './OrderBox';

const OrderItem = () => {
    const [myOrder, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://dmediaworld.com/creative-agency/allorders?email=' + sessionStorage.getItem('email'))
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    return (
        <div>
            <div className="row">
                {
                    myOrder.length > 0 ?
                    myOrder.map(order => <OrderBox data={order} />)
                    :
                    <Spiner />
                }
            </div>

        </div>
    );
};

export default OrderItem;