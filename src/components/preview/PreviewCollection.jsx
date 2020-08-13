import React from 'react';
import { withRouter } from 'react-router-dom';
import './PreviewCollection.styles.scss';

import ItemCollection from '../item-collection/ItemCollection';

const PreviewCollection = ({ items: { title, items, routeName }, history, match }) => {
    
    return (
        <div className='collection-preview'>
            <h2 className='title' onClick={() => history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</h2>
            <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <ItemCollection key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default withRouter(PreviewCollection);