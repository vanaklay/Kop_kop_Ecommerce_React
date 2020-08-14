import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/selectors';
import CategoryPage from './CategoryPage';
import withSpinner from '../../components/with-spinner/withSpinner';

const mapStateToProps = createStructuredSelector({
    // We pass the function which gets the state into our selector and this will in turn create 
    // the selector for us
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(withSpinner(CategoryPage));

export default CollectionPageContainer;
