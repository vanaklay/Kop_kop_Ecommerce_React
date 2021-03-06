import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';
import { toggleCartHidden } from '../../redux/actions';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);