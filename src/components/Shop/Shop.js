import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const Shop = () => {
    const first12 = fakeData.slice(0, 12);
    const [products, setProducts] = useState(first12);

    return (
        <div className='container mt-5'>
            <main className='row d-flex'>
                <div style={{}} className="col-md-6 offset-md-1">
                    {
                        products.map(product => <Products product={product}></Products>)
                    }
                </div>
                <div style={{ height: '400px' }} className="col-md-3 rounded offset-md-1 container bg-light">
                    <h3 className='text-center mt-3'>
                        Cart
                    </h3>
                    <p className='text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat quibusdam numquam temporibus laudantium illum?
                    </p>
                    <button className='btn btn-primary form-control rounded-pill'>Start Your Journey</button>
                </div>
            </main>
        </div>
    );
};

export default Shop;