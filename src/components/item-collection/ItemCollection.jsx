import React from 'react';
import './ItemCollection.styles.scss';

const ItemCollection = ({ name, price, imageUrl }) => {
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
        </div>
    );
};

export default ItemCollection;