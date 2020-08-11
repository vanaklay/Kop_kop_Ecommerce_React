import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    // Stripe needs the price in cents
    const priceForStripe = price * 100;
    const publiqhableKey = 'Public KEY';
    const onToken = token => { console.log(token); alert('Le paiement est un succès');};
    return (
        <StripeCheckout 
            name='KOP KOP SHOP Ltd.'
            label='Acheter'
            billingAddress
            shippingAddress
            description={`Le montant total est ${price} €`}
            amount={priceForStripe}
            panelLabel='Acheter maintenant'
            token={onToken}
            currency='EUR'
            stripeKey={publiqhableKey}
            locale='fr'

            />
    );
};

export default StripeButton;