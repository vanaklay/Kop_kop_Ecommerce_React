import React from 'react';
import './ShopPage.styles.scss';

import shopData from '../../services/items.data';

import PreviewCollection from '../../components/preview/PreviewCollection';

const ShopPage = () => {

    return (
        <div className='shop-page'>
            { shopData.map(({ id, ...otherDataProps }) => ( <PreviewCollection key={id} {...otherDataProps} />)) }
        </div>
    );
};

export default ShopPage;