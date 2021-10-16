import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {
    const first5 = fakeData.slice(0, 5);
    const [products, setProducts] = useState(first5);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        console.log('added to cart', product);
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='container mt-5'>
            <main className='row d-flex'>
                <div style={{}} className="col-md-6 offset-md-1">
                    {
                        products.map(product => <Products handleAddToCart={handleAddToCart} product={product}></Products>)
                    }
                </div>
                <div style={{ height: '400px' }} className="col-md-3 rounded offset-md-1 container bg-light">
                    <Cart cart={cart}></Cart>
                </div>
            </main>
        </div>
    );
};

export default Shop;