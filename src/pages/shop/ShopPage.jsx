import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom';
import './ShopPage.styles.scss';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CategoryPage from '../category/CategoryPage';
import withSpinner from '../../components/with-spinner/withSpinner';

import { fetchCollectionsStartAsync } from '../../redux/actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/selectors';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CategoryPage);

const ShopPage = ({ match, isCollectionFetching, fetchCollectionsStartAsync, isCollectionLoaded }) => {

    // Move this code to redux store 
    // useEffect(() => {
    //     const collectionRef = firestore.collection('collections');
        // firebase subscription
        // collectionRef.onSnapshot( snapShot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        //     updateCollections(collectionsMap);
        //     setIsLoading(false);
        // });
        // promises method
    //     collectionRef.get().then(snapShot => {
    //                 const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //                 updateCollections(collectionsMap);
    //                 setIsLoading(false);
    //             });

    // }, [updateCollections]);

    useEffect(() => {
        fetchCollectionsStartAsync()
    }, [fetchCollectionsStartAsync]);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
});
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);