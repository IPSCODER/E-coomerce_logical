import React, { useState } from 'react';
import './Login.css'
import { Link,  useLocation } from "react-router-dom";
// import StorefrontIcon from '@material-ui/icons/Storefront';
import { Storefront } from '@mui/icons-material';
// import { auth } from "./Firebase";

function Login() {
    const history = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const signIn = e => {
    //     e.preventDefault();

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             history('/'); 
    //         })
    //         .catch(error => alert(error.message))

    // }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             if (auth) {
    //                 history('/');
    //             }
    //         })
    //         .catch(error => alert(error.message))

    // }   

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <Storefront className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={()=>{history('/')}} >
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInBtton' onClick={()=>{history('/')}}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={()=>{history('/')}}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;