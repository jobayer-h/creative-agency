import React, { useEffect, useState } from 'react';
import Spiner from '../LendingPage/Services/Spiner';
import AdminTable from './AdminTable';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://dmediaworld.com/creative-agency/allordersadmin')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        orders.length > 0 ?
                        orders.map(order => <AdminTable data={order} />)
                        :
                        <Spiner />
                    }

                </tbody>
            </table>
        </div>
    );
};

export default OrderList;