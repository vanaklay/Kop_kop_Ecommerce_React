import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import { selectCartItems } from '../../redux/selectors';
import { toggleCartHidden } from '../../redux/actions';

import './CartDropdown.styles.scss';

const CartDropdown = ({ items, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            { items.length ? ( items.map(item => (<CartItem key={item.id} item={item}/>)) ) 
                : ( <span className='empty-message'>Votre panier est vide</span> ) }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Paiement</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    items: selectCartItems
});

// Connect passes dispatch into our component as a prop if we do not supply a second argument 
// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });
export default withRouter(connect(mapStateToProps)(CartDropdown));