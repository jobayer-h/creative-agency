import React from 'react';
import Sidebar from './Sidebar';
import DashbordHeading from './DashbordHeading';
import './Dashbord.css'
const Dashboard = (props) => {
    document.title ="Dashboard"
    const pageName = props.page;
    return (
        <section className="container-fluid ">
            <div className="row dashboard-section">
                <div className="col-md-3 col-6 col-sm-4 col-xl-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-sm-8 col-xl-10">
                    <DashbordHeading name={pageName} />
                    <div className="canvas">
                        <div className="component-sizeing">
                            {
                                <props.component />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;