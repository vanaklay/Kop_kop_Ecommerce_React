import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    // Stripe needs the price in cents
    const priceForStripe = price * 100;
    const publiqhableKey = 'pk_test_51HEs43FGWM4tao2ovRIPo4ScQTX5StZ7nUY5iullFpjGBS0cabOyjh7Dy5iEXGCMrMAEl273yNV5XuRB1qaqr9RU00qjk6zBfG';
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