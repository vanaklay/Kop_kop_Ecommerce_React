import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    bags: 1,
    mugs: 2,
    womens: 3,
    mens: 4
};

const selectCollection = state => state.collection;

export const selectCollections = createSelector(
    [selectCollection],
    collection => collection.data
);

export const selectCategory = categoryUrlParam => createSelector(
    [selectCollections],
    collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[categoryUrlParam])
);