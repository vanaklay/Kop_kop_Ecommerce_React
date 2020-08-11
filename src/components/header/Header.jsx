import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../services/firebase';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser, selectCartHidden } from '../../redux/selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv, LogoStyles } from './Header.styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/' >
                <LogoStyles />
                <h2>KOP KOP SHOP</h2>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop' >SHOP</OptionLink>
                <OptionLink to='/contact' >CONTACT</OptionLink>
                { 
                    currentUser ? 
                    <OptionDiv onClick={() => auth.signOut()}>DECONNEXION</OptionDiv>
                    : <OptionLink to='/signin'>LOGIN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            { !hidden && <CartDropdown /> }
            
        </HeaderContainer>
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