import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const Shipment = () => {

    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);
    const onSubmit = data => {
        setShippingData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const savedCart = getDatabaseCart();
        const orderDetails = {
            // ...loggedInUser,
            products: savedCart,
            shipment: shippingData,
            paymentId,
            orderTime: new Date()
        };

        fetch('https://nameless-reaches-00400.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                processOrder();
                alert('Your order has been placed. Thank you for beign with us.')
                history.replace('/review')
            })
    }



    return (
        <div>
            <Header></Header>
            <div style={{ border: '1px solid gray', padding: '15px', display: shippingData ? 'none': 'block' }} className="container col-md-5 mt-5">
                <h3 className='text-center'>Fillup the form</h3>
                <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' placeholder='Name' defaultValue={loggedInUser.name} {...register("name", { required: true })} />
                    {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                    <br />
                    <input className='form-control' placeholder='Email' defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                    {errors.email && <span style={{ color: 'red' }}>Email adress is required</span>}
                    <br />
                    <input className='form-control' placeholder='Address' {...register("address", { required: true })} />
                    {errors.address && <span style={{ color: 'red' }}>Address is required</span>}
                    <br />
                    <input className='form-control' placeholder='Phone Number' {...register("phone", { required: true })} />
                    {errors.phone && <span style={{ color: 'red' }}>Phone number is required</span>}
                    <br />
                    <input className='form-control btn btn-danger' type="submit" />
                </form>
            </div>
           <div style={{display: shippingData ? 'block': 'none'}} className='container mt-5 col-md-5'>
            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
           </div>
        </div>
    );
};

export default Shipment;