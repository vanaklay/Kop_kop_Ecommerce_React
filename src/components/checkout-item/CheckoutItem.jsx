import React from 'react';
import { connect } from 'react-redux';

import { removeItem, addItem, removeQuantity } from '../../redux/actions';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({ item, removeItem, addItem, removeQuantity }) => {
    const { imageUrl, name, price, quantity } = item
    return (
        <div className='checkout-item'> 
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeQuantity(item)}>&#10094;</div>
                    {quantity}
                <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className='price'>{price} €</span>
            <div className='remove-button' onClick={() => removeItem(item)}>&#10005;</div>
            
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeQuantity: item => dispatch(removeQuantity(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);