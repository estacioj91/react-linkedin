import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js'
import logo from './assets/linkedin.png';
import './Header.css'
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase.js';
import { logout, selectUser } from './features/userSlice.js';


function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="linkedin logo"/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
                <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
                {user ? (<HeaderOption avatar={user?.photoUrl || user?.displayName || ''} user={user?.displayName} onClick={logoutOfApp} title="logout"></HeaderOption>) : ''}
            </div>
        </div>
    )
}

export default Header;
