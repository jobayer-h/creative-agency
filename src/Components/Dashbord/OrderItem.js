import React, {useEffect, useState } from 'react';
import Spiner from '../LendingPage/Services/Spiner';
import OrderBox from './OrderBox';
import firebase from "firebase/app";
import "firebase/auth";
const OrderItem = () => {
    
    const [myOrder, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://creative-agency-jobayer.herokuapp.com/allorders?email=' + firebase.auth().currentUser.email)
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