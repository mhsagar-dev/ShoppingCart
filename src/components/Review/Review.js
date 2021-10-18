import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const placeOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
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
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
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
                            <Link to='/review'>
                                <button onClick={placeOrder} className='btn btn-danger form-control'> Place Order </button>
                            </Link>
                        </Cart>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Review;