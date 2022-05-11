import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {auth, createUserWithEmailAndPassword, updateProfile} from './firebase'
import {login} from './features/userSlice'
import './Login.css'
function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name) {
            return alert("pleaes enter full name")
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                console.log("dispatching login", userAuth)
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        }).catch(error => alert(error.message));

    }

    const loginToApp = (e) =>  {
        e.preventDefault();
        auth.signInWithEmailAndPassword()
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        })
    }
    return(
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="linkedin"/>
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full name (required if registering)"/>
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)"/>
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
