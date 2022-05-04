import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logo from './assets/linkedin.png';
function Header() {
    return (
        <div className="header">
            <h2>Header</h2>
            <div className="header__left">
                <img src={logo} alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header;
