import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../services/firebase';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser, selectCartHidden } from '../../redux/selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.styles.scss';

const Header = ({ currentUser, hidden }) => {
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
                    <div className='option' onClick={() => auth.signOut()}>DECONNEXION</div>
                    : <Link to='/signin'>LOGIN</Link>
                }
                <CartIcon />
            </div>
            { !hidden && <CartDropdown /> }
            
        </div>
    );
};
// const mapStateToProps = state => ({
//     // state === combineReducers inside reducers/index.js 
//     // We want combineReducers, then we want the user which will give us our 
//     // userReducer, then from there, we want the currentUser value
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);