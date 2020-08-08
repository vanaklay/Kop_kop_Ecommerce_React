import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/actions';
import CustomButton from '../custom-button/CustomButton';
import './ItemCollection.styles.scss';

const ItemCollection = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                 />
            <div className='collection-footer'>
                <span className='name'>{name.toUpperCase()}</span>
                <span className='price'>{price} €</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Ajouter au panier</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ItemCollection);