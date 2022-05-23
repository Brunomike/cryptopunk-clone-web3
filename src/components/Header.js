import React from 'react';

import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchLogo from '../assets/header/search.png';
import themeSwitchLogo from '../assets/header/theme-switch.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logoContainer">
                <img src={punkLogo} className="punkLogo" alt=""/>
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchLogo} alt="Search Icon"/>
                </div>
                <input type="text" className="searchInput" placeholder='Collection, item or user ...'/>
            </div>
            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src={themeSwitchLogo} alt="Theme Switch Icon"/>
                </div>
            </div>
        </div>
    )
}

export default Header;
