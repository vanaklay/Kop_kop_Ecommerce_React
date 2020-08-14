import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/selectors';
import withSpinner from '../../components/with-spinner/withSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview)); === this.below
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;