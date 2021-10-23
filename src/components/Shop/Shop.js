import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('http://localhost:8000/productsByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [products]);

    const handleAddToCart = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    };

    return (
        <div className='bg-light'>
            <Header></Header>
            <div className='container mt-5'>
                <div style={{ height: '260px', border: '1px solid gray' }} className=" col-md-12 rounded container bg-light">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn btn-danger form-control'> Review Order </button>
                        </Link>
                    </Cart>
                </div>
                <main className='row'>
                    {
                        products.map(product => <Products
                            key={product.key}
                            showAddToCart={true}
                            handleAddToCart={handleAddToCart}
                            product={product}>
                        </Products>)
                    }
                </main>
            </div>
        </div>

    );
};

export default Shop;