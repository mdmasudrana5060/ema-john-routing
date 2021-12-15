import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = props => {

    const { name, img, price, stock, star, seller } = props.product;

    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>Price:${price}</p>
                <Rating
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star icon-color "
                    fullSymbol="fas fa-star icon-color"
                /> <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular-btn">{element}add to cart</button>
            </div>



        </div>
    );
};

export default Product;