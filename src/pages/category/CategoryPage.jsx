import React from 'react';
import { connect } from 'react-redux';

import { selectCategory } from '../../redux/selectors';
import PreviewCollection from '../../components/preview/PreviewCollection';
import './CategoryPage.styles.scss';

const CategoryPage = ({ collection }) => {
    return (
        <div className='category'>
            <PreviewCollection {...collection} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCategory(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(CategoryPage);