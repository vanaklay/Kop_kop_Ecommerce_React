import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../services/firebase';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
                <h2>KOP KOP SHOP</h2>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                { 
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    );
};

export default Header;