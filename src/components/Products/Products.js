import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Products.css'

const Products = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="bg-light rounded">
 <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="pd-info">
                <h6 className='pd-name'>{name}</h6>
                <br />
                <p><small>by: {seller}</small></p>
                <h3>${price}</h3>
                <p>{stock} left in stock</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn btn-danger'> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>

        </div>
        </div>
       
    );
};

export default Products;