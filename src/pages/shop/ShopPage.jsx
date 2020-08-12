import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './ShopPage.styles.scss';

import { firestore, convertCollectionsSnapshotToMap } from '../../services/firebase';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CategoryPage from '../category/CategoryPage';

import { updateCollections } from '../../redux/actions';

const ShopPage = ({ match, updateCollections }) => {
    
    useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot( async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
        });
    }, [updateCollections]);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);