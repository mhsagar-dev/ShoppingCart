import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
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

    const tax = (total / 15).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNum = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const h6Style = { fontWeight: 400 };

    return (
        <div>
            <h3 className="text-center mt-2">
                <strong>
                    This is Cart
                </strong>
            </h3>

            <h6 style={h6Style}>Items Added : {cart.length}</h6>
            <h6 style={h6Style}>Products Price: ${formatNum(total)}</h6>
            <h6 style={h6Style}>Shipping Cost : ${shipping}</h6>
            <h6 style={h6Style}>Tax + Vat: {tax}</h6>
            <h6 style={h6Style}>Total : ${grandTotal}</h6>
            <br />
            {props.children}
        </div>
    );
};

export default Cart;