import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../../components/preview/PreviewCollection';
import { selectCollections } from '../../redux/selectors';
import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            { collections.map(({ id, ...otherDataProps }) => ( <PreviewCollection key={id} {...otherDataProps} />)) }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});
export default connect(mapStateToProps)(CollectionsOverview);