import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

import { selectCartItems, selectCartTotal } from '../../redux/selectors';

import './CheckoutPage.styles.scss';

const CheckoutPage = ({ items, total }) => {
    const header = ['Produit', 'Description', 'Quantité', 'Prix', 'Supprimer'];
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                { header.map((title, idx) => (
                    <div className='header-block' key={idx}>
                        <span>{title}</span>
                    </div>
                )) }
            </div>
            { items.map(item => ( 
                <CheckoutItem key={item.id} item={item} />
            )) }
            <div className='total'>
                <span>TOTAL : {total} €</span>
            </div> 
            <div className='test-warning'>* Utilisez cette credit carte test pour procéder au paiement * <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);