import { UPDATE_COLLECTIONS } from '../actions/types';

export const updateCollections = (collectionsMap) => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
});