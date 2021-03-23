import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
const PriveteRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            firebase.auth().currentUser ? (children) : (
            
            <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PriveteRoute;