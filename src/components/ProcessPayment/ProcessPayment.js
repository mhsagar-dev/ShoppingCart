import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51JjxrFGDZTBaHyN0YNtuxaUDQGRy7faOiORub1tWFkjtOG6oDdaoD9qTQ3Tfd423441B1neUefe8YNQy5kAOUnz400wLVRYhKD');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}> </SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;