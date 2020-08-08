import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import { selectCartItems } from '../../redux/selectors/cart.selectors';

import './CartDropdown.styles.scss';

const CartDropdown = ({ items }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            { items.map(item => (<CartItem key={item.id} item={item} />))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({
    items: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);