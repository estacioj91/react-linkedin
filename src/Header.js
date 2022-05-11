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


function Header() {
    const headShot = "https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg";
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
                <HeaderOption avatar={headShot} title="me"></HeaderOption>
            </div>
        </div>
    )
}

export default Header;
