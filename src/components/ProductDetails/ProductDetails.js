import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Products from '../Products/Products'

const ProductDetails = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch('https://nameless-reaches-00400.herokuapp.com/product/' + productKey)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [productKey])
    
    return (
        <div>
            <Header></Header>
            <div className='container mt-5'>
                <main className='row d-flex'>
                    <div style={{}} className="col-md-6 offset-md-1">
                        <Products showAddToCart = {false} product={product}></Products>
                    </div>
                    <div style={{ height: '250px' }} className="col-md-3 rounded offset-md-1 container bg-light">

                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductDetails;