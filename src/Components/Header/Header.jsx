import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to="shop">Order</Link></li>
                <li><Link to="order">Order Review</Link></li>
                <li><Link to="manage-inventory">Manage Inventory</Link></li>
                <li><Link to="login">Login</Link></li>
            </ul>
        </div>
        </nav>
    );
};

export default Header;