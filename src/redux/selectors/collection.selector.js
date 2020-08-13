import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectCollections = createSelector(
    [selectCollection],
    collection => collection.data
);

export const selectCollectionsArray = createSelector(
    [selectCollections],
    collections => (collections ? Object.keys(collections).map( key => (collections[key])) : [])
);

export const selectCategory = categoryUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[categoryUrlParam] : null )
);
export const selectIsCollectionFetching = createSelector(
    [selectCollection],
    collection => collection.isFetching
);
export const selectIsCollectionsLoaded = createSelector(
    [selectCollection],
    collection => !!collection.data
);