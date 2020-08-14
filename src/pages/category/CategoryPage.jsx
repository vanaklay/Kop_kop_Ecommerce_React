import React from 'react';
import { connect } from 'react-redux';

import { selectCategory } from '../../redux/selectors';
import ItemCollection from '../../components/item-collection/ItemCollection';

import { CollectionContainer, CollectionTitle, CollectionItems } from './CategoryPage.styles';

const CategoryPage = (props) => {
    const { title, items } = props.collection;
    return (
        <CollectionContainer>
            <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
            <CollectionItems>
                {items.map( item => (<ItemCollection key={item.id} item={item} history={props.history} />))}
            </CollectionItems>
        </CollectionContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    // Because our selectCategory is a function that returns a function we pass the function that 
    // comes out of this function the state in order for us to wire everything together
    collection: selectCategory(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(CategoryPage);