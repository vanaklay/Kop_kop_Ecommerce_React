import React from 'react';
import { connect } from 'react-redux';

import { selectCategory } from '../../redux/selectors';
import ItemCollection from '../../components/item-collection/ItemCollection';
import './CategoryPage.styles.scss';

const CategoryPage = (props) => {
    const { title, items } = props.collection;
    return (
        <div className='category-page'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className='items'>
                {items.map( item => (<ItemCollection key={item.id} item={item} />))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    // Because our selectCategory is a function that returns a function we pass the function that 
    // comes out of this function the state in order for us to wire everything together
    collection: selectCategory(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(CategoryPage);