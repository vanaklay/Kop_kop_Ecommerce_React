import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../../components/preview/PreviewCollection';
import { selectCollectionsArray } from '../../redux/selectors';
import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
            { collections.map( collection => (<PreviewCollection key={collection.id} items={collection} />)) }
        </CollectionsOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsArray
});
export default connect(mapStateToProps)(CollectionsOverview);