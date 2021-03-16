import React, { useContext } from 'react';
import './Login.css'
import branding from './../../resorces/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../../firebaseConfig';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    // eslint-disable-next-line
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
                sessionStorage.setItem('user', user.displayName)
                sessionStorage.setItem('email', user.email)
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
                            <h3>Login With</h3>
                            <br/>
                            <div className="google-btn" onClick={handleGoogleSignIn}>
                                <FontAwesomeIcon className="icon" icon={faGoogle} />
                                <span>Continue With Google</span>
                            </div>
                            <br/>
                            <p>Don’t have an account? <span className="create-account" onClick={handleGoogleSignIn}>Create an account</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;