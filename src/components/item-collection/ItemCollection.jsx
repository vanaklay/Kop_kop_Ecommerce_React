import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addItem } from '../../redux/actions';
import { selectCurrentUser } from '../../redux/selectors';
import CustomButton from '../custom-button/CustomButton';
import './ItemCollection.styles.scss';

const ItemCollection = ({ item, addItem, currentUser, history }) => {
    console.log(history);
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                 />
            <div className='collection-footer'>
                <span className='name'>{name.toUpperCase()}</span>
                <span className='price'>{price} €</span>
            </div>
            { currentUser ? <CustomButton inverted onClick={() => addItem(item)} className='custom-button'>Ajouter au panier</CustomButton>
                        :  <CustomButton inverted onClick={() => history.push('/signin')} className='custom-button'>Se connecter</CustomButton> 
                }
            
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
export default connect(mapStateToProps, mapDispatchToProps)(ItemCollection);