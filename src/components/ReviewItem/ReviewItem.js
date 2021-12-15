import React from 'react';
import '../Product/Product.css';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className='product'>
            <div></div>
            <div>
                <h3>{name}</h3>
                <p>price:{price}</p>
                <p>quantity:{quantity}</p>
                <button onClick={() => { handleRemove(key) }} className='regular-btn'>remove item</button>

            </div>


        </div>
    );
};

export default ReviewItem;