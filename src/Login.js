import React, { useState } from 'react';
import {auth} from './firebase'
import './Login.css'
function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
    }

    const loginToApp = ()=>  {

    }
    return(
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="linkedin"/>
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full name (required if registering)"/>
                <input type="text" placeholder="Profile pic URL (optional)"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>
                Not a member? <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}
export default Login;
