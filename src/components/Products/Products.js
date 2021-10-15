import React from 'react';
import './Products.css'

const Products = (props) => {
    const {img, name} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h6 className='pd-name'>{name}</h6>
            </div>

        </div>
    );
};

export default Products;