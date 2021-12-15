import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {

            product.quantity = 1;


        }

        totalQuantity = totalQuantity + product.quantity
        total = total + product.price * product.quantity;

    }


    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Items Ordered:{totalQuantity}</h5>
            <h5>total:{total.toFixed(2)}</h5>
            {props.children}

        </div>
    );
};

export default Cart;