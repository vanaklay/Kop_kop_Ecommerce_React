import React from 'react';
import { withRouter } from 'react-router-dom';

import ItemCollection from '../item-collection/ItemCollection';

import { PreviewCollectionContainer, PreviewCollectionTitle, PreviewItems } from './PreviewCollection.styles';

const PreviewCollection = ({ items: { title, items, routeName }, history, match }) => {
    
    return (
        <PreviewCollectionContainer>
            <PreviewCollectionTitle onClick={() => history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</PreviewCollectionTitle>
            <PreviewItems>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <ItemCollection key={item.id} item={item} history={history}/>
                    ))}
            </PreviewItems>
        </PreviewCollectionContainer>
    );
};

export default withRouter(PreviewCollection);