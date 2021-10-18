import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key, img, price } = props.product;

    return (
        <div style={{ border: '1px solid gray' }} className='product'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h6>{name}</h6>
                    <p>Quantity: {quantity}</p>
                    <h3>${price}</h3>
                    <br />
                    <button
                        onClick={() => props.removeCart(key)}
                        className="btn btn-danger">Remove From Cart</button>
                </div>
        </div>

    );
};

export default ReviewItem;