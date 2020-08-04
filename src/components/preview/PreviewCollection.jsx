import React from 'react';
import './PreviewCollection.styles.scss';

import ItemCollection from '../item-collection/ItemCollection';

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h2 className='title'>{ title.toUpperCase() }</h2>
            <div className='preview'>
            { items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otheItemProps}) => (
                    <ItemCollection key={id} { ...otheItemProps } />
                    ))}
            </div>
        </div>
    );
};

export default PreviewCollection;