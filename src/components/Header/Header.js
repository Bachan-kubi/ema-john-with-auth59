import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../UserContext/UserContext';
import './Header.css';

const Header = () => {
    const {user }= useContext(AuthContext);
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/signUp">Sign Up</Link>
                <Link to="/login">Log In</Link>
                <span>{user?.name}</span>
            </div>
        </nav>
    );
};

export default Header;