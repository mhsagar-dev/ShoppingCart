import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 75) {
        shipping = 0;
    }
    else if (total > 50) {
        shipping = 5.75;
    }
    else if (total > 0) {
        shipping = 12.75;
    }
    
    return (
        <div>
            <h3 className="text-center mt-2">
                <strong>
                    This is Cart
                </strong>
            </h3>

            <h6>Items Added : {cart.length}</h6>
            <h6>Products Price: ${total}</h6>
            <h6>Shipping Cost : ${shipping}</h6>
            <h6>Total : ${total + shipping}</h6>
        </div>
    );
};

export default Cart;