import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Header from '../Header/Header';
import Products from '../Products/Products'

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
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