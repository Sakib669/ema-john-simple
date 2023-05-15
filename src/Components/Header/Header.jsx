import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
        .then(result => {})
        .catch(err => console.error(err));
    }

    return (
        <nav>
            <div className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/order">Order Review</Link></li>
                <li><Link to="/manage-inventory">Manage Inventory</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                {
                    user && <span>Welcome {user.email}!  <button onClick={handleLogOut}>Sign Out</button></span>
                }
            </ul>
        </div>
        </nav>
    );
};

export default Header;