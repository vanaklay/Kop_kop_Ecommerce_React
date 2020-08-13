import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './ShopPage.styles.scss';

import { firestore, convertCollectionsSnapshotToMap } from '../../services/firebase';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CategoryPage from '../category/CategoryPage';
import withSpinner from '../../components/with-spinner/withSpinner';

import { updateCollections } from '../../redux/actions';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CategoryPage);

const ShopPage = ({ match, updateCollections }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot( async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            setIsLoading(false);
        });
    }, [updateCollections]);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
            <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);