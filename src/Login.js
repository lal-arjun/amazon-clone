import { Link, useHistory } from "react-router-dom"
import React, { useState } from 'react'
import "./Login.css"
import { auth } from "./firebase";
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    // console.log(auth);

    const signIn = e => {
        e.preventDefault();
        // some fancy firebase stuff
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            // alert('Sign-In Success'); 
            history.push('/')})
        .catch(error => alert(error.message))
    }
    const registeruser = e => {
        e.preventDefault();
        auth.
            createUserWithEmailAndPassword(email, password).then(auth => {
                        // console.log(auth);
                         if (auth){ 
                            alert('Account Create Success'); history.push('/');
                         }                      
                })            
        .catch(error => alert(error.message))
    }

    // console.log(password)
  return (
    <div className="login">
        <Link to = "/">
            <img className = "login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" 
            />
        </Link>

        <div className="login__container">
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="email" name="" id="email1"  value = {email} 
                onChange={(e) => {setEmail(e.target.value)}}/>

                <h5>Password</h5>
                <input type="password" name="" id="pass1" value = {password}
                onChange = {e => setPassword(e.target.value)} />
                <button type="submit" onClick={signIn} className="login__signinbutton">Sign In</button>
            </form>
            <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>       
            <button type="submit" onClick={registeruser} className="login__registerbutton">
                Create your Amazon Account
                </button>
        </div>
    </div>
  )
}

export default Login