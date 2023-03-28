import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, ratings, } = props.product;

    const handleAddToCart = props.handleAddToCart;



    return (
        <div>
            <div className="card">
                <img src={img} alt="" />
                <div className="product-info">
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>Price:${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}Star</p>
                </div>
                <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                    Add to Cart
                    <FontAwesomeIcon icon={faCartPlus} beatFade />
                </button>
            </div>
        </div>
    );
};

export default Product;