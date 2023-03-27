import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="shop">Order</a></li>
                <li><a href="order">Order Review</a></li>
                <li><a href="manage-inventory">Manage Inventory</a></li>
                <li><a href="login">Login</a></li>
            </ul>
        </div>
        </nav>
    );
};

export default Header;