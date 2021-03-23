import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
const DashbordHeading = ({name}) => {
    return (
        <div className="d-flex justify-content-between mt-4">
            <div>
                <h5>{name}</h5>
            </div>
            <div>
                <h5><span className="text-marking" >Welcome,</span>  {firebase.auth().currentUser.displayName}</h5>
            </div>
        </div>
    );
};

export default DashbordHeading;