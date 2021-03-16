import React from 'react';

const DashbordHeading = ({name}) => {
    return (
        <div className="d-flex justify-content-between mt-4">
            <div>
                <h5>{name}</h5>
            </div>
            <div>
                <h5><span className="text-marking" >Welcome,</span>  {sessionStorage.getItem('user')}</h5>
            </div>
        </div>
    );
};

export default DashbordHeading;