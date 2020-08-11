import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../../components/preview/PreviewCollection';
import { selectCollectionsArray } from '../../redux/selectors';
import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            { collections.map( collection => (<PreviewCollection key={collection.id} items={collection} />)) }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsArray
});
export default connect(mapStateToProps)(CollectionsOverview);