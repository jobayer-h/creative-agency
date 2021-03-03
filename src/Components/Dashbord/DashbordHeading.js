import React, { useContext } from 'react';
import { userContext } from '../../App';

const DashbordHeading = ({name}) => {
    const [logedInUser, setLogedInUser] = useContext(userContext);
    return (
        <div className="d-flex justify-content-between mt-4">
            <div>
                <h5>{name}</h5>
            </div>
            <div>
                <h5><span className="text-marking" >Welcome,</span>  {logedInUser.displayName}</h5>
            </div>
        </div>
    );
};

export default DashbordHeading;