import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  
  // $
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IEWOrEnzrzDbqO0s3SGYtoruyDryU7XbjQlOnk29yC8hfnJvcN29ZlYmTlIUNbzbwSBJQX7H4u8kMekIrjXq3C300ZJRIE4WS';


  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothin Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;