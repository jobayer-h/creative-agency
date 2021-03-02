import React from 'react';
import Sidebar from './Sidebar';
import DashbordHeading from './DashbordHeading';
import './Dashbord.css'
const Dashboard = (props) => {
    const pageName = props.page;
    return (
        <section className="container-fluid ">
            <div className="row dashboard-section">
                <div className="col-md-2">
                <Sidebar />
                </div>
                <div className="col-md-10">
                    <DashbordHeading name={pageName}/>
                    <div className="canvas">
                        {
                            <props.component />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;