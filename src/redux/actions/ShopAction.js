import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from '../actions/types';
import { firestore, convertCollectionsSnapshotToMap } from '../../services/firebase';

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});
export const fetchCollectionsFail = (errorMessage) => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});
// Function that we pass into our components to begin this process
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        // We want the fetching data
        const collectionRef = firestore.collection('collections');
        // Turn isFetching to true
        dispatch(fetchCollectionsStart)

        collectionRef.get().then(snapShot => {
                    const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
                    dispatch(fetchCollectionsSuccess(collectionsMap));
                }).catch(error => dispatch(fetchCollectionsFail(error)));
    }
};