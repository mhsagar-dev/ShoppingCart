import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory()

    

    const proceedCheckout = () => {
       history.push('/shipment');
    }

    const removeCart = (productKey) => {
        console.log('remove clicked', productKey)
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('https://nameless-reaches-00400.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);
    return (
        <div>
            <Header></Header>
            <div className='container mt-5'>
                <main className='row d-flex'>
                    <div className="col-md-6 offset-md-1">
                        {
                            cart.map(pd => <ReviewItem
                                key={pd.key}
                                removeCart={removeCart}
                                product={pd}>
                            </ReviewItem>)
                        }
                    </div>
                    <div style={{ height: '260px', border: '1px solid gray' }} className="col-md-3 rounded offset-md-1 container bg-light">
                        <Cart cart={cart}>
                                <button onClick={proceedCheckout} className='btn btn-danger form-control'> Proceed Checkout </button>
                        </Cart>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Review;