import React, { useEffect, useState } from 'react';
import UseProducts from '../../hooks/UseProduct';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';



const OrderReview = () => {
    const [products] = UseProducts();
    const [cart, setCart] = useState([]);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }

    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);

                }

            }
            setCart(storedCart);

        }
    }, [products])

    const handlePlaceOrder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart();

    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        handleRemove={handleRemove}
                        product={product}>

                    </ReviewItem>)
                }




            </div>

            <div className='cart-container'>
                <Cart cart={cart}>

                    <button className='regular-btn' onClick={handlePlaceOrder}>Place Order</button>

                </Cart>
            </div>


        </div>
    );
};

export default OrderReview;