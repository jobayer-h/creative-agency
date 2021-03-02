import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import DashbordHeading from './DashbordHeading';
import OrderForm from './OrderForm'
import './Dashbord.css'
const Dashboard = () => {
    return (
        <section className="container-fluid ">
            <div className="row dashboard-section">
                <div className="col-md-2">
                <Sidebar />
                </div>
                <div className="col-md-10">
                    <DashbordHeading />
                    <div className="canvas">
                        <OrderForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;