import React, { useContext } from 'react';
import './Login.css'
import branding from './../../resorces/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../../firebaseConfig';
import { userContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                setLogedInUser(user);
                history.replace(from);
                console.log(logedInUser);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <section className="login-page">
            <div className="container">
                <div className="row">
                    <div className="branding">
                        <Link to='/'><img src={branding} alt="" /></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="login-container">
                        <div>
                            <h1>Login With</h1>
                            <button onClick={handleGoogleSignIn}>Continue With Google</button>
                            <p>Don’t have an account? <span onClick={handleGoogleSignIn}>Create an account</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;