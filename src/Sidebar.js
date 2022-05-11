import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import background from './assets/sidebar-img.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from './features/userSlice.js';

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={background} alt=""/>
                <Avatar className="sidebar__avatar" src={user.profileUrl}>{user.displayName ? user.displayName[0]: ''}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,333</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,313</p>
                </div>
                
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('design')}
                {recentItem('developer')}

            </div>
        </div>
    )
}
export default Sidebar;
