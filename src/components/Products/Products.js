import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="col-md-3 mt-5">
            <div class="card bg-light">
                <img className ="card-img-top" src={img} alt="Card image cap" />
                <div style={{ height: '400px' }} class="card-body">
                    <p className="card-title text-center">{name}</p>
                    <h1 className ="card-text text-center">${price}</h1>
                    <p className ="text-center">Seller: {seller}</p>
                    <br />
                    {props.showAddToCart === true && <button onClick={() => props.handleAddToCart(props.product)} className='btn btn-danger form-control'> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>}
                </div>
            </div>
        </div>

    );
};

export default Products;